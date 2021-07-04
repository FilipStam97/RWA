import { createHtmlElement, SEASONS_CONST } from "./DOMbuilder";



export class  EpisodesPage {

    constructor() {
        
    }

    renderEpisodesPage(host: HTMLElement){
        let episodesPageMainWrapperDiv = createHtmlElement(host,"div", "episodesPageMainWrapperDiv");
        let controlsDiv = createHtmlElement(episodesPageMainWrapperDiv, "div", "controlsDiv");
        this.renderControls(controlsDiv, SEASONS_CONST.elementArray);

        let episodesListDiv = createHtmlElement(episodesPageMainWrapperDiv,"div", "episodesListDiv");
    }

    renderControls(host: HTMLElement, elementList: Array<any>){
        let dropdownDiv = createHtmlElement(host,"div", "dropdown");

        let dropDownButton = <HTMLButtonElement>createHtmlElement(dropdownDiv, "button", "dropDownButton btn btn-primary dropdown-toggle btn-lg");
        dropDownButton.type="button";
        dropDownButton.id="dropdownMenuButton";
        dropDownButton.setAttribute("data-mdb-toggle","dropdown");
        dropDownButton.setAttribute("aria-expanded","false");
        dropDownButton.innerHTML="Pick a season";

        let seasonList = createHtmlElement(dropdownDiv,"ul", "dropdown-menu");
        seasonList.setAttribute("aria-labelledby","dropdownMenuButton");
        elementList.forEach(season => {
            let option = createHtmlElement(seasonList, "li", "dropdown-item");
            option.innerHTML=season.title;
            option.onclick =()=> {
                dropDownButton.innerHTML=season.title;
                dropDownButton.style.backgroundColor= season.color;
            }
            
        });



    }

    renderEpisodes(host: HTMLElement){

    }

}