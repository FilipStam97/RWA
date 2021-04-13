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
        let noteListContainer = createHtmlElement(host, "li", "noteListContainer mdl-list__item mdl-list__item--three-line");

        let noteSpanContainer = createHtmlElement(noteListContainer, "span", "noteSpanContainer mdl-list__item-primary-content");

        let noteTitleSpan = createHtmlElement(noteSpanContainer, "span", "noteTitleSpan");
        noteTitleSpan.innerHTML=this.title;

        let noteTextSpan = createHtmlElement(noteSpanContainer, "span", "noteTextSpan mdl-list__item-text-body");
        noteTextSpan.innerHTML=this.text;

        let notebuttonSpan = createHtmlElement(noteListContainer, "span", "notebuttonSpan mdl-list__item-secondary-content");

        let notebuttonDelete = createHtmlElement(notebuttonSpan, "button", "notebuttonDelete mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored mdl-js-ripple-effect");
        notebuttonDelete.onclick = () => {
            document.dispatchEvent(deleteEvent);
            //console.log(deleteEvent);
        };

        let notebuttonDeleteIcon = createHtmlElement(notebuttonDelete, "i", "notebuttonDeleteIcon material-icons");
        notebuttonDeleteIcon.innerHTML="delete";

        var deleteEvent = new CustomEvent("delete", {
            detail: {
                noteID: this.id
              }
        });
        
    }

}
