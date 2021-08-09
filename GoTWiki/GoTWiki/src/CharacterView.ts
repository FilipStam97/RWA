import { createHtmlElement } from "./DOMbuilder";




export function renderCharacterView(host: HTMLElement, character: any) {
    
    let characterViewDiv = createHtmlElement(host, "div", "characterViewDiv");
    characterViewDiv.style.backgroundColor = "white";

    let characterViewImage = <HTMLImageElement>createHtmlElement(characterViewDiv, "img", "characterViewImage");
    characterViewImage.src=character.characterImageFull;

    let characterViewName = createHtmlElement(characterViewDiv, "h3", "characterViewName");
    characterViewName.innerHTML = character.characterName;

}