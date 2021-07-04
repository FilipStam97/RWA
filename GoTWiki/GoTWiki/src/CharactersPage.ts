import { identity } from "rxjs";
import { createHtmlElement, FILTER_CONST, renderCheckBox } from "./DOMbuilder";

export function renderCharactersPage(host: HTMLElement){

    let sideNavDiv = createHtmlElement(host, "div", "sideNavDiv");
    renderSideNav(sideNavDiv);

    let characterListDiv = createHtmlElement(host,"div", "characterListDiv");
    renderCharactersList(characterListDiv);

}

export function renderSideNav(host: HTMLElement){
    renderCheckboxCategories(host, FILTER_CONST.elementArray);
   // host.innerHTML="BLLLLLLLLLLLLLLLLLLAAA";

}

export function renderCharactersList(host: HTMLElement) {
    host.innerHTML="ZLAAAAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";


}

export function renderCheckboxCategories(host: HTMLElement, categorieList: Array<any>){
    categorieList.forEach(cetegorie => {
        let cetegorieDiv = createHtmlElement(host,"div", "cetegorieDiv");
        let categorieTitle = createHtmlElement(cetegorieDiv,"span", "categorieTitle");
        categorieTitle.innerHTML= cetegorie.title;

        let categorieElementsWrapperDiv = createHtmlElement(cetegorieDiv, "div", "cetegorieDiv");
        let categorieElementsCollapseDiv = createHtmlElement(cetegorieDiv, "div", "categorieElementsCollapseDiv collapse mt-3");
        categorieElementsCollapseDiv.id=cetegorie.name;

        if(cetegorie.values.length > 4) {

        let anchorCollapseButton = <HTMLAnchorElement>createHtmlElement(cetegorieDiv, "a", "anchorCollapseButton");
        anchorCollapseButton.setAttribute("data-mdb-toggle", "collapse");
        anchorCollapseButton.href=`#${cetegorie.name}`;
        anchorCollapseButton.setAttribute("aria-expanded","false");
        anchorCollapseButton.setAttribute("aria-controls",cetegorie.name);
        anchorCollapseButton.setAttribute("role", "button");
        
        let anchorIcon =<HTMLImageElement> createHtmlElement(anchorCollapseButton,"i","anchorIcon fas fa-angle-down");
        anchorIcon.innerHTML="Show more";
        anchorCollapseButton.onclick =()=> {
            if(anchorCollapseButton.getAttribute("aria-expanded")=="true") {
                anchorIcon.className="fas fa-angle-up";
                anchorIcon.innerHTML="Show less";
            }
            else{
                anchorIcon.className="fas fa-angle-down";
                anchorIcon.innerHTML="Show more";
            } 
        }
   
        }
        cetegorie.values.sort().forEach((value: string, index: number) => {
            if(index<4){
                renderCheckBox(categorieElementsWrapperDiv,value,cetegorie.name);
            }
            else{
                renderCheckBox(categorieElementsCollapseDiv,value,cetegorie.name);
            }
           
        });

    });
}