import { Note } from "./Note";


export class NoteApp {
    public noteList: Array<Note>;
    public noteCounter: number;
    public idSetter: number;


    constructor() {
        this.noteList = [];
        this.noteCounter = 0;
        this.idSetter = 0;
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
        noteInputHead.innerHTML = "Add your note :)";

        let noteInputForm = createHtmlElement(host, "form", "InputForm");
        noteInputForm.setAttribute("onsubmit", "return false;");

        let containerInputFieldsDiv = createHtmlElement(noteInputForm, "div", "containerInputFieldsDiv");

        let noteInputTitleInputDiv = createHtmlElement(containerInputFieldsDiv, "div", "TitleInputDiv mdl-textfield mdl-js-textfield");

        let titleInputField = createHtmlElement(noteInputTitleInputDiv, "input", "TitleInputField mdl-textfield__input");
        titleInputField.id = "title1";

        let titleInputLabel = createHtmlElement(noteInputTitleInputDiv, "label", "TitleInputLabel mdl-textfield__label");
        titleInputLabel.setAttribute("type", "text");
        titleInputLabel.setAttribute("for", "title1");
        titleInputLabel.innerHTML = "Note title";


        let noteInputTextInputDiv = createHtmlElement(containerInputFieldsDiv, "div", "TextInputDiv mdl-textfield mdl-js-textfield");

        let textInputField = createHtmlElement(noteInputTextInputDiv, "textarea", "TextInputField mdl-textfield__input");
        textInputField.setAttribute("rows", "8");
        textInputField.id = "text1";

        let textInputLabel = createHtmlElement(noteInputTextInputDiv, "label", "TextInputLabel mdl-textfield__label");
        textInputLabel.setAttribute("type", "text");
        textInputLabel.setAttribute("for", "text1");
        textInputLabel.innerHTML = "Note text";

        let buttonDiv = createHtmlElement(containerInputFieldsDiv, "div", "buttonDiv");

        let buttonAdd = createHtmlElement(buttonDiv, "button", "buttonAdd mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--primary");
        buttonAdd.onclick = () => {
            this.handleNoteSubmit();
            (<HTMLInputElement>titleInputField).value="";
            (<HTMLInputElement>textInputField).value="";
        }

        let buttonIcon = createHtmlElement(buttonAdd, "i", "buttonIcon material-icons");
        buttonIcon.innerHTML = "add";
        
       
    }

    renderNoteList(host: HTMLElement) {
        let noteListUnorderdList = createHtmlElement(host, "ul", "noteListUnorderdList demo-list-three mdl-list");
        this.noteList.forEach(note => {
            note.renderNote(noteListUnorderdList);
        });
        

       

    }

    handleNoteSubmit(){
        this.noteCounter++;
        this.idSetter++;
        let title =(<HTMLInputElement>document.getElementById("title1")).value;
        let text= (<HTMLInputElement>document.getElementById("text1")).value;
        this.noteList.push(new Note(this.idSetter,<string>title,<string>text));
        let noteAppNoteListDiv = <HTMLElement>document.querySelector(".noteAppNoteListDiv")
        noteAppNoteListDiv.innerHTML='';
        this.renderNoteList(noteAppNoteListDiv);
    }

    handleDeleteEvent(id: number) {
       // console.log(id);
        this.noteList=this.noteList.filter(note => note.id !==id);
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