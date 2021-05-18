import { resolve } from "../webpack.config";
import { Name } from "./Name";
import { ajax } from 'rxjs/ajax';
import {catchError, filter, map} from "rxjs/operators"
import { from, of, range } from "rxjs";
import { names } from "./names";

export class NameGenerator {
    public nameList: Array<Name>;


    constructor() {
        this.nameList = [];
    }

    renderApp(body: HTMLElement) {
        let mainAppContainerDiv = createHtmlElement(body, "div", "mainAppContainerDiv");

        let noteAppInputDiv = createHtmlElement(mainAppContainerDiv, "div", "noteAppInputDiv");

        let noteAppNoteListDiv = createHtmlElement(mainAppContainerDiv, "div", "noteAppNoteListDiv");

        this.renderNoteInput(noteAppInputDiv);
        this.renderNoteList(noteAppNoteListDiv);


    }

    renderNoteInput(host: HTMLElement) {
        let noteInputHead = createHtmlElement(host, "span", "InputHead mdl-typography--display-2");
        noteInputHead.innerHTML = "Name Generator";

        let noteInputDescription = createHtmlElement(host, "p", "InputDesc mdl-typography--title");
        noteInputDescription.innerHTML = "Generate random names in different ways!";



        let buttonDiv = createHtmlElement(host, "div", "buttonDiv");
        let buttonGetFiveQuotesSequence = createHtmlElement(buttonDiv, "button", "buttonGetFiveQuotesSequence mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect");
        buttonGetFiveQuotesSequence.innerHTML = "Get 5 quotes in a sequence";
        buttonGetFiveQuotesSequence.onclick = () => {
            this.getFiveNames();
        

        }

        let buttonGetThreeQuotesSynchronized = createHtmlElement(buttonDiv, "button", "buttonGetThreeQuotesSynchronized mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect");
        buttonGetThreeQuotesSynchronized.innerHTML = "Get 3 quotes immediately";
        buttonGetThreeQuotesSynchronized.onclick = () => {
           // this.getThreeQuotesSynchronized()
           console.log(this.nameList);
        }
    }

    renderNoteList(host: HTMLElement) {
        let noteListUnorderdList = createHtmlElement(host, "ul", "noteListUnorderdList demo-list-three mdl-list");
        this.nameList.forEach(name => {
            name.renderNote(noteListUnorderdList);
        });
    }

    getFiveNames() {
        let noteAppNoteListDiv = <HTMLElement>document.querySelector(".noteAppNoteListDiv");
        this.nameList.splice(0, this.nameList.length);
        const nameIdList = this.getRandomID(10);
        console.log(nameIdList);
       const result= from(nameIdList);
           // map(x => console.log(x) /*this.nameList.push(new Name(names[x]))*/),
        console.log(result);
        // for (var i = 0; i < 5; i++) {
        //     this.getQuote().then(result => {
        //         this.quoteList.push(new Name(result));
        //         noteAppNoteListDiv.innerHTML = '';
        //         this.renderNoteList(noteAppNoteListDiv);
        //     });
        // }

    }

    getThreeQuotesSynchronized() {
        let noteAppNoteListDiv = <HTMLElement>document.querySelector(".noteAppNoteListDiv");
        this.nameList.splice(0, this.nameList.length);
        Promise.all([
            this.getQuote(),
            this.getQuote(),
            this.getQuote()
        ]).then(array => {
            array.forEach(string => {
                this.nameList.push(new Name(string));
            });
            noteAppNoteListDiv.innerHTML = '';
            this.renderNoteList(noteAppNoteListDiv);
        })

    }

    getRandomID(numberOfIDs :number){
        //console.log(Math.floor(Math.random()*21986))
        var IDArray: number[]=[];
        for(var i = 0; i <numberOfIDs; i++){
            IDArray.push(Math.floor(Math.random()*21986));
        }
        return IDArray;
        
    
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