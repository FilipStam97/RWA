import { resolve } from "../webpack.config";
import { Name } from "./Name";
import {catchError, filter, map, take} from "rxjs/operators"
import { from, interval, of, range, Observable } from "rxjs";
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

        this.renderInput(noteAppInputDiv);
        this.renderNameList(noteAppNoteListDiv);


    }

    renderInput(host: HTMLElement) {
        let noteInputHead = createHtmlElement(host, "span", "InputHead mdl-typography--display-2");
        noteInputHead.innerHTML = "Name Generator";

        let noteInputDescription = createHtmlElement(host, "p", "InputDesc mdl-typography--title");
        noteInputDescription.innerHTML = "Generate random names in different ways!";



        let buttonDiv = createHtmlElement(host, "div", "buttonDiv");
        let buttonGetTenNames = createHtmlElement(buttonDiv, "button", "buttonGetTenNames mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect");
        buttonGetTenNames.innerHTML = "Generate 10 names instantly";
        buttonGetTenNames.onclick = () => {
            this.getTenNames();
        

        }

        let buttonGetFiveLetterNames = createHtmlElement(buttonDiv, "button", "buttonGetFiveLetterNames mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect");
        buttonGetFiveLetterNames.innerHTML = "Generate 5 five letter names";
        buttonGetFiveLetterNames.onclick = () => {
            this.getFiveLetterNames();
       
           
        }


        let buttonGetNamesUntillEnd = createHtmlElement(buttonDiv, "button", "buttonGetNamesUntillEnd mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect");
        buttonGetNamesUntillEnd.innerHTML = "Get 3 names in intervals";
        buttonGetNamesUntillEnd.onclick = () => {
            this.intervalGenerationSequence()
    
        }
    }

    renderNameList(host: HTMLElement) {
        let noteListUnorderdList = createHtmlElement(host, "ul", "noteListUnorderdList demo-list-three mdl-list");
        this.nameList.forEach(name => {
            name.renderNote(noteListUnorderdList);
        });
    }

    getFiveLetterNames() {
        let noteAppNoteListDiv = <HTMLElement>document.querySelector(".noteAppNoteListDiv");
        this.nameList.splice(0, this.nameList.length);
        const nameIdList = this.getRandomIDList(100);
        from(nameIdList).pipe(
            filter(x=> names[x].length==5),
            take(5),

        ).subscribe(x => {
            this.nameList.push(new Name(names[x]));
            noteAppNoteListDiv.innerHTML = '';
            this.renderNameList(noteAppNoteListDiv);
        });
    }

    getTenNames() {
        let noteAppNoteListDiv = <HTMLElement>document.querySelector(".noteAppNoteListDiv");
        this.nameList.splice(0, this.nameList.length);
        const nameIdList = this.getRandomIDList(10);
        from(nameIdList).subscribe(x => {
            this.nameList.push(new Name(names[x]));
            noteAppNoteListDiv.innerHTML = '';
            this.renderNameList(noteAppNoteListDiv);
        });
    }

    intervalGenerationSequence() {
        let noteAppNoteListDiv = <HTMLElement>document.querySelector(".noteAppNoteListDiv");
        this.nameList.splice(0, this.nameList.length);
        return new Observable(sub => {
            setTimeout(() => {
                sub.next(Math.floor(Math.random()*21986))
            }, Math.random()*1000);
            setTimeout(() => {
                sub.next(Math.floor(Math.random()*21986))
            },  Math.random()*1000);
            setTimeout(() => {
                sub.next(Math.floor(Math.random()*21986))
            },  Math.random()*1000);
        }).subscribe(x => {
            this.nameList.push(new Name(names[<number>x]));
            noteAppNoteListDiv.innerHTML = '';
            this.renderNameList(noteAppNoteListDiv);
        })
    }

 


    getRandomIDList(numberOfIDs :number){
        //console.log(Math.floor(Math.random()*21986))
        var IDArray: number[]=[];
        for(var i = 0; i <numberOfIDs; i++){
            IDArray.push(Math.floor(Math.random()*21986));
        }
        return IDArray;
    }

    getRandomID(){
      return Math.floor(Math.random()*21986);
    }


}

export function createHtmlElement(host: HTMLElement, element: string, className: string) {
    let hostElement = host;
    let childElement = document.createElement(element);
    childElement.className = className;
    hostElement.appendChild(childElement);
    return <HTMLElement>childElement;
}