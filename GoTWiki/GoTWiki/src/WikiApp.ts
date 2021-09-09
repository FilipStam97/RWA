
import { createHtmlElement } from "./DOMbuilder";
import { CharactersPage } from "./CharactersPage";
import { debounceTime, filter, map, switchMap} from "rxjs/operators";
import { fromEvent } from "rxjs";
import { getSearchResults } from "./WikiService";
const DEBOUNCE_TIME_VALUE = 700;
const SEARCH_INPUT_MIN_LENGTH = 3;

export class WikiApp {
    charactersPage: CharactersPage;
    
    
    constructor() {
    }

    renderApp(body: HTMLElement) {
        this.renderHeader(body);
        let mainAppContainerDiv = createHtmlElement(body, "div", "mainAppContainerDiv");
        this.charactersPage=new CharactersPage();
        this.charactersPage.renderCharactersPage(mainAppContainerDiv);
    }

    renderHeader(host: HTMLElement){
        //Navbar
        let nav = createHtmlElement(host,"nav","navbar navbar-expand-lg navbar-light bg-light");
        //div wrapper
        let containerWrapper = createHtmlElement(nav,"div","container-fluid");
    
        // Nav brand
        let navBrand = createHtmlElement(containerWrapper,"a","navbar-brand mt-2 mt-lg-0");
        let navBrandName = createHtmlElement(navBrand,"span","navBrandName");
        navBrandName.innerHTML="GoT Character Wiki";
        navBrandName.onclick = () => {
            this.charactersPage=new CharactersPage();
            let mainAppContainerDiv = <HTMLElement>document.querySelector(".mainAppContainerDiv");
            mainAppContainerDiv.innerHTML="";
            this.charactersPage.renderCharactersPage(mainAppContainerDiv);
        };
    
        //Right elements
        let rightElementContainerDiv = createHtmlElement(containerWrapper,"div","d-flex align-items-center");
        let searchBar = <HTMLInputElement>createHtmlElement(rightElementContainerDiv, "input", "searchBar form-control rounded");
        searchBar.type="search";
        searchBar.placeholder="Search";
        this.handleSearch();
    
        let iconSpan = createHtmlElement(rightElementContainerDiv,"span","input-group-text border-0");
        let searchIcon = createHtmlElement(iconSpan,"i","fas fa-search");
    
    }

    handleSearch() {
        let characterListDiv = <HTMLElement>document.querySelector(".characterListDiv");
        let searchBar = <HTMLElement>document.querySelector(".searchBar");

        fromEvent(searchBar, "input")
        .pipe(
            debounceTime(DEBOUNCE_TIME_VALUE),
            map((ev: InputEvent) => (<HTMLInputElement>ev.target).value),
            filter(input => input.length >= SEARCH_INPUT_MIN_LENGTH),
            switchMap( value => 
                getSearchResults(value)
            )
        )
        .subscribe( res =>{ 
            this.charactersPage.renderCharacterList(res);
        });
    }



}






