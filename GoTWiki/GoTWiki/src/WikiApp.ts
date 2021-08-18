
import { createHtmlElement, SERVER_CONNECTION } from "./DOMbuilder";
import { CharactersPage } from "./CharactersPage";
import { catchError, debounceTime, filter, map, retry, switchMap, take, takeUntil, zipAll } from "rxjs/operators"
import { from, interval, of, range, Observable, Subject, fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";
const FETCH_URI = "http://localhost:3000/films";

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





    // handleMovieInput() {
    //     // pogledaj interesantne operatore scan, pairwise, distinct
    //     let noteAppNoteListDiv = <HTMLElement>document.querySelector(".noteAppNoteListDiv");
    //     let input = <HTMLElement>document.querySelector(".inputMain");
    //     fromEvent(input, "input").pipe(
    //         debounceTime(700),
    //         map((ev: InputEvent) => (<HTMLInputElement>ev.target).value),
    //         filter(x => x.length >= 5),
    //         switchMap(name => this.getMovieByName(name)),
    //     ).subscribe(movieList => {
    //         noteAppNoteListDiv.innerHTML = "";
    //        // this.renderMovieList(noteAppNoteListDiv, movieList);
    //     })
    // }

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
            debounceTime(700),
            map((ev: InputEvent) => (<HTMLInputElement>ev.target).value),
            filter(x => x.length >= 3),
            switchMap( value => this.getSearchResults(value, "characterName"))
           // switchMap(value => this.handleSearchRequest(value))

        )
        .subscribe( res => console.log(res));
    }


    getSearchResults(value: string, searchByVariable: string) {
        return from(fetch(`${SERVER_CONNECTION}/${searchByVariable}/${value}`)
            .then((res) => {
                if (res.ok)
                    return res.json();
                else throw new Error(`Nothing was found`);
            })
            .catch((err) => console.log("Error" + err))

        )
    }






}
//notes dok gledam predavanja
//forkJoin, zip, combineLatest, merge
//express , types za express, komanda za debug servera
//nodemonitor tj. nodemon





