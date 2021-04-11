import { createHtmlElement } from './NoteApp';

export class Note {
    public id: number;
    public title :string;
    public text :string;
    constructor(id: number, title :string, text :string) {
        this.title=title;
        this.text=text;
        this.id=id;
    }

    renderNote(host :HTMLElement) {
        let noteListContainer =<HTMLElement> createHtmlElement(host, "li", "noteListContainer mdl-list__item mdl-list__item--three-line");

        let noteSpanContainer = <HTMLElement> createHtmlElement(noteListContainer, "span", "noteSpanContainer mdl-list__item-primary-content");

        let noteTitleSpan = <HTMLElement>createHtmlElement(noteSpanContainer, "span", "noteTitleSpan");
        noteTitleSpan.innerHTML=this.title;

        let noteTextSpan = <HTMLElement>createHtmlElement(noteSpanContainer, "span", "noteTextSpan mdl-list__item-text-body");
        noteTextSpan.innerHTML=this.text;

        let notebuttonSpan = <HTMLElement>createHtmlElement(noteListContainer, "span", "notebuttonSpan mdl-list__item-secondary-content");

        let notebuttonDelete = <HTMLElement>createHtmlElement(notebuttonSpan, "button", "notebuttonDelete mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored mdl-js-ripple-effect");
        notebuttonDelete.onclick = () => {
            dispatchEvent(deleteEvent);
        };

        let notebuttonDeleteIcon = <HTMLElement>createHtmlElement(notebuttonDelete, "i", "notebuttonDeleteIcon material-icons");
        notebuttonDeleteIcon.innerHTML="delete";

        var deleteEvent = new CustomEvent("delete", {
            detail: {
                noteID: this.id
              }
        });
        
    }

}
