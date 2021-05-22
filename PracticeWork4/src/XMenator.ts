import { Movie, Character } from "./Models";
import { catchError, debounceTime, filter, map, retry, switchMap, take, takeUntil } from "rxjs/operators"
import { from, interval, of, range, Observable, Subject, fromEvent } from "rxjs";
const FETCH_URI = "http://localhost:3000/films";

export class XMenator {
    constructor() {
    }

    renderApp(body: HTMLElement) {
        let mainAppContainerDiv = createHtmlElement(body, "div", "mainAppContainerDiv");

        let noteAppInputDiv = createHtmlElement(mainAppContainerDiv, "div", "noteAppInputDiv");

        let noteAppNoteListDiv = createHtmlElement(mainAppContainerDiv, "div", "noteAppNoteListDiv");

        this.renderInput(noteAppInputDiv);



    }

    renderInput(host: HTMLElement) {
        let noteInputHead = createHtmlElement(host, "span", "InputHead mdl-typography--display-2");
        noteInputHead.innerHTML = "X-Menator";

        let noteInputDescription = createHtmlElement(host, "p", "InputDesc mdl-typography--title");
        noteInputDescription.innerHTML = "Search X-Men movies or something.";



        let inputDiv = createHtmlElement(host, "div", "inputDiv mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
        let inputMain = createHtmlElement(inputDiv, "input", "inputMain mdl-textfield__input");
        inputMain.setAttribute("type", "text");
        inputMain.setAttribute("id", "input1");
        this.handleMovieInput();

        let labelMain = createHtmlElement(inputDiv, "label", "labelMain mdl-textfield__label");
        labelMain.innerHTML = "Movie title";
        labelMain.setAttribute("for", "input1");


    }

    renderMovieList(host: HTMLElement, moives: Movie[]) {
        let noteListUnorderdList = createHtmlElement(host, "ul", "noteListUnorderdList demo-list-three mdl-list");
        moives.forEach(movie => {
            this.renderMovie(noteListUnorderdList, movie);
        });
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
        let noteAppNoteListDiv = <HTMLElement>document.querySelector(".noteAppNoteListDiv");
        let input = <HTMLElement>document.querySelector(".inputMain");
        fromEvent(input, "input").pipe(
            debounceTime(700),
            map((ev: InputEvent) => (<HTMLInputElement>ev.target).value),
            filter(x => x.length >= 5),
            switchMap(name => this.getMovieByName(name)),
        ).subscribe(movieList => {
            noteAppNoteListDiv.innerHTML = "";
            this.renderMovieList(noteAppNoteListDiv, movieList);
        })
    }

    renderMovie(host: HTMLElement, movie: Movie) {
        let noteListContainer = createHtmlElement(host, "li", "noteListContainer mdl-list__item mdl-list__item--three-line");

        let noteSpanContainer = createHtmlElement(noteListContainer, "span", "noteSpanContainer mdl-list__item-primary-content");

        let noteTextSpan = createHtmlElement(noteSpanContainer, "span", "noteTextSpan");
        noteTextSpan.innerHTML = movie.name;

    }

}

export function createHtmlElement(host: HTMLElement, element: string, className: string) {
    let hostElement = host;
    let childElement = document.createElement(element);
    childElement.className = className;
    hostElement.appendChild(childElement);
    return <HTMLElement>childElement;
}