import { createHtmlElement } from './KanyeQuoteApp';

export class Quote {
    public text :string;
    constructor(text :string) {
        this.text=text;
    }

    renderNote(host :HTMLElement) {
        let noteListContainer = createHtmlElement(host, "li", "noteListContainer mdl-list__item mdl-list__item--three-line");

        let noteSpanContainer = createHtmlElement(noteListContainer, "span", "noteSpanContainer mdl-list__item-primary-content");

        let noteTitleSpan = createHtmlElement(noteSpanContainer, "span", "noteTitleSpan");
        noteTitleSpan.innerHTML="Kanye said:";

        let noteTextSpan = createHtmlElement(noteSpanContainer, "span", "noteTextSpan mdl-list__item-text-body");
        noteTextSpan.innerHTML=this.text;
  
    }

}
