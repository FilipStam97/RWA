import { Note } from "./Note";


export class NoteApp {
    public noteList: Array<Note>;

    constructor() {
        this.noteList = [];
    }

    renderNoteApp(body: HTMLElement) {
        createHtmlElement(body, "div", "mainAppContainerDiv");
        let mainAppContainerDiv = <HTMLElement>document.querySelector(".mainAppContainerDiv");

        createHtmlElement(mainAppContainerDiv, "div", "noteAppInputDiv");
        let noteAppInputDiv = <HTMLElement>document.querySelector(".noteAppInputDiv");

        createHtmlElement(mainAppContainerDiv, "div", "noteAppNoteListDiv");
        let noteAppNoteListDiv = <HTMLElement>document.querySelector(".noteAppNoteListDiv");

        this.renderNoteInput(noteAppInputDiv);
    
    }

    renderNoteInput(host: HTMLElement) {
        createHtmlElement(host, "span", "InputHead mdl-typography--display-2");
        let noteInputHead = <HTMLElement>document.querySelector(".InputHead");
        noteInputHead.innerHTML = "Add your note :)";

        createHtmlElement(host, "form", "InputForm");
        let noteInputForm = <HTMLElement>document.querySelector(".InputForm");

        createHtmlElement(noteInputForm, "div", "containerInputFieldsDiv");
        let containerInputFieldsDiv = <HTMLElement>document.querySelector(".containerInputFieldsDiv");

        createHtmlElement(containerInputFieldsDiv, "div", "TitleInputDiv mdl-textfield mdl-js-textfield");
        let noteInputTitleInputDiv = <HTMLElement>document.querySelector(".TitleInputDiv");

        createHtmlElement(noteInputTitleInputDiv, "input", "TitleInputField mdl-textfield__input");
        let titleInputField = <HTMLElement>document.querySelector(".TitleInputField");
        titleInputField.id = "title1";

        createHtmlElement(noteInputTitleInputDiv, "label", "TitleInputLabel mdl-textfield__label");
        let titleInputLabel = <HTMLElement>document.querySelector(".TitleInputLabel");
        titleInputLabel.setAttribute("type", "text");
        titleInputLabel.setAttribute("for", "title1");
        titleInputLabel.innerHTML = "Title";


        createHtmlElement(containerInputFieldsDiv, "div", "TextInputDiv mdl-textfield mdl-js-textfield");
        let noteInputTextInputDiv = <HTMLElement>document.querySelector(".TextInputDiv");

        createHtmlElement(noteInputTextInputDiv, "textarea", "TextInputField mdl-textfield__input");
        let textInputField = <HTMLElement>document.querySelector(".TextInputField");
        textInputField.setAttribute("rows", "8");
        textInputField.id = "text1";

        createHtmlElement(noteInputTextInputDiv, "label", "TextInputLabel mdl-textfield__label");
        let textInputLabel = <HTMLElement>document.querySelector(".TextInputLabel");
        textInputLabel.setAttribute("type", "text");
        textInputLabel.setAttribute("for", "text1");
        textInputLabel.innerHTML = "Note text";

        createHtmlElement(containerInputFieldsDiv, "div", "buttonDiv");
        let buttonDiv = <HTMLElement>document.querySelector(".buttonDiv");

        createHtmlElement(buttonDiv, "button", "buttonAdd mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--primary");
        let buttonAdd = <HTMLElement>document.querySelector(".buttonAdd");

        createHtmlElement(buttonAdd, "i", "buttonIcon material-icons");
        let buttonIcon = <HTMLElement>document.querySelector(".buttonIcon");
        buttonIcon.innerHTML="add";




    }

}

export function createHtmlElement(host: HTMLElement, element: string, className: string) {
    let hostElement = host;
    let childElement = document.createElement(element);
    childElement.className = className;
    hostElement.appendChild(childElement);
}