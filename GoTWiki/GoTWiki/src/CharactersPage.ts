import { createHtmlElement } from "./DOMbuilder";

export function renderCharactersPage(host: HTMLElement){

    let sideNavDiv = createHtmlElement(host, "div", "sideNavDiv");
    renderSideNav(sideNavDiv);

    let characterListDiv = createHtmlElement(host,"div", "characterListDiv");
    renderCharactersList(characterListDiv);

}

export function renderSideNav(host: HTMLElement){
    host.innerHTML="BLLLLLLLLLLLLLLLLLLAAA";

}

export function renderCharactersList(host: HTMLElement) {
    host.innerHTML="ZLAAAAAAAAAAA";


}