import { createHtmlElement } from './NameGenerator';

export class Name {
    public text :string;
    constructor(text :string) {
        this.text=text;
    }

    renderNote(host :HTMLElement) {
        let noteListContainer = createHtmlElement(host, "li", "noteListContainer mdl-list__item mdl-list__item--three-line");

        let noteSpanContainer = createHtmlElement(noteListContainer, "span", "noteSpanContainer mdl-list__item-primary-content");

        let noteTextSpan = createHtmlElement(noteSpanContainer, "span", "noteTextSpan");
        noteTextSpan.innerHTML=this.text;
  
    }

}

export interface Movie {
    name: string;
    wiki: string;
    characters: Array<Character>;
    series: string;
    released: string;
}


export interface Character {
    name: string;
    mainseries: string;
}