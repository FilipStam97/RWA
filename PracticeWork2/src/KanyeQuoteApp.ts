import { Quote } from "./Quote";


export class KanyeQuoteApp {
    public quoteList: Array<Quote>;


    constructor() {
        this.quoteList = [];
        document.addEventListener("delete", (e) => {this.handleDeleteEvent((<CustomEvent>e).detail.noteID)/*console.log("event", e)*/})
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
        buttonGetFiveQuotesSequence.innerHTML="Get 5 quotes in a sequence";

        let buttonGetThreeQuotesSynchronized = createHtmlElement(buttonDiv, "button", "buttonGetThreeQuotesSynchronized mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect");
        buttonGetThreeQuotesSynchronized.innerHTML="Get 3 quotes immediately";
        buttonGetThreeQuotesSynchronized.onclick =()=> {
         //fetch.('https://api.kanye.rest').then( res => res.json()).then(data => console.log(data));
        }
        // buttonAdd.onclick = () => {
        //     this.handleNoteSubmit();
            
        // }
      
        
       
    }

    renderNoteList(host: HTMLElement) {
        let noteListUnorderdList = createHtmlElement(host, "ul", "noteListUnorderdList demo-list-three mdl-list");
        this.quoteList.forEach(quote => {
            quote.renderNote(noteListUnorderdList);
        });
        

       

    }

    handleNoteSubmit(){
        let title =(<HTMLInputElement>document.getElementById("title1")).value;
        let text= (<HTMLInputElement>document.getElementById("text1")).value;
        this.quoteList.push(new Quote(<string>text));
        let noteAppNoteListDiv = <HTMLElement>document.querySelector(".noteAppNoteListDiv")
        noteAppNoteListDiv.innerHTML='';
        this.renderNoteList(noteAppNoteListDiv);
    }

    handleDeleteEvent(id: number) {
       // console.log(id);
   
        let noteAppNoteListDiv = <HTMLElement>document.querySelector(".noteAppNoteListDiv")
        noteAppNoteListDiv.innerHTML='';
        this.renderNoteList(noteAppNoteListDiv);
    }

   

}

export function createHtmlElement(host: HTMLElement, element: string, className: string) {
    let hostElement = host;
    let childElement = document.createElement(element);
    childElement.className = className;
    hostElement.appendChild(childElement);
    return <HTMLElement>childElement;
}