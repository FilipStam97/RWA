import { resolve } from "../webpack.config";
import { Quote } from "./Quote";
import { ajax } from 'rxjs/ajax';
import {catchError, filter, map} from "rxjs/operators"
import { of, range } from "rxjs";
import { names } from "./names";

export class KanyeQuoteApp {
    public quoteList: Array<Quote>;


    constructor() {
        this.quoteList = [];
    }

    renderNoteApp(body: HTMLElement) {
        let mainAppContainerDiv = createHtmlElement(body, "div", "mainAppContainerDiv");

        let noteAppInputDiv = createHtmlElement(mainAppContainerDiv, "div", "noteAppInputDiv");

        let noteAppNoteListDiv = createHtmlElement(mainAppContainerDiv, "div", "noteAppNoteListDiv");

        this.renderNoteInput(noteAppInputDiv);
        this.renderNoteList(noteAppNoteListDiv);


    }

    renderNoteInput(host: HTMLElement) {
        let noteInputHead = createHtmlElement(host, "span", "InputHead mdl-typography--display-2");
        noteInputHead.innerHTML = "Kanye Quoter";

        let noteInputDescription = createHtmlElement(host, "p", "InputDesc mdl-typography--title");
        noteInputDescription.innerHTML = "Get random Kanye quotes to make your life better!!!";



        let buttonDiv = createHtmlElement(host, "div", "buttonDiv");
        let buttonGetFiveQuotesSequence = createHtmlElement(buttonDiv, "button", "buttonGetFiveQuotesSequence mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect");
        buttonGetFiveQuotesSequence.innerHTML = "Get 5 quotes in a sequence";
        buttonGetFiveQuotesSequence.onclick = () => {
            this.getQuotesLengthLessThan25();
        }

        let buttonGetThreeQuotesSynchronized = createHtmlElement(buttonDiv, "button", "buttonGetThreeQuotesSynchronized mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect");
        buttonGetThreeQuotesSynchronized.innerHTML = "Get 3 quotes immediately";
        buttonGetThreeQuotesSynchronized.onclick = () => {
            this.getThreeQuotesSynchronized()
        }
    }

    renderNoteList(host: HTMLElement) {
        let noteListUnorderdList = createHtmlElement(host, "ul", "noteListUnorderdList demo-list-three mdl-list");
        this.quoteList.forEach(quote => {
            quote.renderNote(noteListUnorderdList);
        });
    }

    getFiveQuotesSequence() {
        let noteAppNoteListDiv = <HTMLElement>document.querySelector(".noteAppNoteListDiv");
        this.quoteList.splice(0, this.quoteList.length);
        for (var i = 0; i < 5; i++) {
            this.getQuote().then(result => {
                this.quoteList.push(new Quote(result));
                noteAppNoteListDiv.innerHTML = '';
                this.renderNoteList(noteAppNoteListDiv);
            });
        }

    }

    getThreeQuotesSynchronized() {
        let noteAppNoteListDiv = <HTMLElement>document.querySelector(".noteAppNoteListDiv");
        this.quoteList.splice(0, this.quoteList.length);
        Promise.all([
            this.getQuote(),
            this.getQuote(),
            this.getQuote()
        ]).then(array => {
            array.forEach(string => {
                this.quoteList.push(new Quote(string));
            });
            noteAppNoteListDiv.innerHTML = '';
            this.renderNoteList(noteAppNoteListDiv);
        })

    }

    getQuotesLengthLessThan25(){
        range(0,10).pipe(
            map(x=> console.log(x + " "+ names[x])),
           // filter(x=> x>50)
        ).subscribe(
          //  x => console.log(x)
        ) 
    
    }

    getQuotesAjax(){
        const obs$ = ajax.getJSON(`https://api.github.com/users?per_page=5`).pipe(
            map(userResponse => console.log('users: ', userResponse)),
            catchError(error => {
              console.log('error: ', error);
              return of(error);
            })
          );
    }

    getQuote() {
        let quote: string;
        return new Promise<string>((resolve, reject) => {
            fetch('https://api.kanye.rest')
                .then(res => res.json())
                .then(data => {
                    quote = data.quote;
                    resolve(quote);
                });
        });
    }

}

export function createHtmlElement(host: HTMLElement, element: string, className: string) {
    let hostElement = host;
    let childElement = document.createElement(element);
    childElement.className = className;
    hostElement.appendChild(childElement);
    return <HTMLElement>childElement;
}