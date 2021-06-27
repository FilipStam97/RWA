import { Movie, Character } from "./Models";
import { createHtmlElement } from "./DOMbuilder";
import { renderCharactersPage } from "./CharactersPage";
import { catchError, debounceTime, filter, map, retry, switchMap, take, takeUntil } from "rxjs/operators"
import { from, interval, of, range, Observable, Subject, fromEvent } from "rxjs";
const FETCH_URI = "http://localhost:3000/films";

export class WikiApp {
    constructor() {
    }

    renderApp(body: HTMLElement) {
        this.renderHeader(body,headerContentList);
        let mainAppContainerDiv = createHtmlElement(body, "div", "mainAppContainerDiv");
        this.renderHomePage(mainAppContainerDiv);
    }

    getMovieByName(movieName: string): Observable<Movie[]> {
        return from(fetch(`${FETCH_URI}/?name_like=${movieName}`)
            .then((res) => {
                if (res.ok)
                    return res.json();
                else throw new Error(`Movie by the name of ${movieName} has not been found`);
            })
            .catch((err) => console.log("Error" + err))

        )
    }

    handleMovieInput() {
        // pogledaj interesantne operatore scan, pairwise, distinct
        let noteAppNoteListDiv = <HTMLElement>document.querySelector(".noteAppNoteListDiv");
        let input = <HTMLElement>document.querySelector(".inputMain");
        fromEvent(input, "input").pipe(
            debounceTime(700),
            map((ev: InputEvent) => (<HTMLInputElement>ev.target).value),
            filter(x => x.length >= 5),
            switchMap(name => this.getMovieByName(name)),
        ).subscribe(movieList => {
            noteAppNoteListDiv.innerHTML = "";
           // this.renderMovieList(noteAppNoteListDiv, movieList);
        })
    }

    renderHeader(host: HTMLElement, contentElements: Array<any>){
        //Navbar
        let nav = createHtmlElement(host,"nav","navbar navbar-expand-lg navbar-light bg-light");
        //div wrapper
        let containerWrapper = createHtmlElement(nav,"div","container-fluid");
    
        //Toggle button
        let toggleButton = <HTMLButtonElement>createHtmlElement(containerWrapper,"button","navbar-toggler");
        toggleButton.type="button";
        toggleButton.setAttribute("data-mdb-toggle", "collapse");
        toggleButton.setAttribute("data-mdb-target", "#navbarSupportedContent");
        toggleButton.setAttribute("aria-controls", "navbarSupportedContent");
        toggleButton.setAttribute("aria-expanded", "false");
        toggleButton.setAttribute("aria-label", "Toggle navigation");
        let toggleButtonIcon = <HTMLImageElement>createHtmlElement(toggleButton,"i","fas fa-bars");
    
    
        //Collapsible wrapper
        let collapsibleWrapperDiv = createHtmlElement(containerWrapper,"div","collapse navbar-collapse");
        collapsibleWrapperDiv.id="navbarSupportedContent";
    
        // Nav brand
        let navBrand = createHtmlElement(collapsibleWrapperDiv,"a","navbar-brand mt-2 mt-lg-0");
        let navBrandName = createHtmlElement(navBrand,"span","navBrandName");
        navBrandName.innerHTML="GoT Wiki";
        navBrandName.onclick = () => {
            let mainAppContainerDiv = <HTMLElement>document.querySelector(".mainAppContainerDiv");
            mainAppContainerDiv.innerHTML="";
            this.renderHomePage(mainAppContainerDiv);
        };
    
        //Left link content
        let navList = createHtmlElement(collapsibleWrapperDiv, "ul","navbar-nav me-auto mb-2 mb-lg-0");
        contentElements.forEach(element => {
            let navListElement = createHtmlElement(navList,"li","nav-item");
            let navListElementLink = <HTMLAnchorElement>createHtmlElement(navListElement,"a","navElement nav-link");
            navListElementLink.innerHTML=element.title;
            navListElementLink.onclick = () => {
                
                this.renderPage(element.title);
            };
            
        });
    
        //Right elements
        let rightElementContainerDiv = createHtmlElement(containerWrapper,"div","d-flex align-items-center");
        let searchBar = <HTMLInputElement>createHtmlElement(rightElementContainerDiv, "input", "form-control rounded");
        searchBar.type="search";
        searchBar.placeholder="Search";
    
        let iconSpan = createHtmlElement(rightElementContainerDiv,"span","input-group-text border-0");
        let searchIcon = createHtmlElement(iconSpan,"i","fas fa-search");
    
    }

    renderHomePage(host:HTMLElement) {
        host.innerHTML="HOOOOOOOOOOOMEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE";
    }

    renderPage(pageTitle: string){
        let mainAppContainerDiv = <HTMLElement>document.querySelector(".mainAppContainerDiv");
        mainAppContainerDiv.innerHTML="";
        switch(pageTitle) {
            case "Characters" : {
                renderCharactersPage(mainAppContainerDiv);
                break;
            }
            case "Episodes" : {
                console.log(pageTitle);
                break;
            }
            case "Locations" : {
                console.log(pageTitle);
                break;
            }
            default: {
                console.log("Error page does not exist");
                break;
            }
        }
    }

}
//notes dok gledam predavanja
//forkJoin, zip, combineLatest, merge
//express , types za express, komanda za debug servera
//nodemonitor tj. nodemon






const headerContentList = [
    {
        title: "Characters"
    },
    {
        title: "Episodes"
    },
    {
        title: "Locations"
    },

]
