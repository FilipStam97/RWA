import { identity, BehaviorSubject, fromEvent, combineLatest, observable, Observable} from "rxjs";
import {ajax} from "rxjs/ajax";
import { filter, map } from "rxjs/operators";
import { createHtmlElement, FILTER_CONST, renderCheckBox } from "./DOMbuilder";
import { FilterObject } from "./Models";
import { SERVER_CONNECTION } from "./DOMbuilder";

const NUM_OF_VISABLE_OPTIONS = 4;

export class CharactersPage{
    filterList: Array<FilterObject>;
    filterMonitor: BehaviorSubject<Array<FilterObject>>

    constructor() {
        this.filterList = new Array();
        this.filterMonitor= new BehaviorSubject(this.filterList);
    }

returnIndexOfElementByName(name :string){
    return this.filterList.findIndex(function(filterObject) { 
        return filterObject.name == name})
}

renderCharactersPage(host: HTMLElement){

    let sideNavDiv = createHtmlElement(host, "div", "sideNavDiv");
    this.renderSideNav(sideNavDiv);

    let characterListDiv = createHtmlElement(host,"div", "characterListDiv");
    this.renderCharactersListSection(characterListDiv);
   

}

renderSideNav(host: HTMLElement){
    this.renderCheckboxCategories(host, FILTER_CONST.elementArray);
    let acceptButton = <HTMLButtonElement>createHtmlElement(host, "button", "acceptButton btn btn-outline-primary btn-rounded");
    acceptButton.type="button";
    acceptButton.setAttribute("data-mdb-ripple-color","dark");
    acceptButton.innerHTML = "ACCEPT FILTERS";
    acceptButton.onclick = () => {
        const filters = {
            "filterArray" : this.filterList
        }
        
        ajax({
            url:`${SERVER_CONNECTION}/characters/filter`,
            method: 'POST',
            headers : { 'Content-Type': 'application/json' },
            body: filters
        }).subscribe( 
            res => console.log(res.response)
        )
    }
}

renderCharactersListSection(host: HTMLElement) {
    host.innerHTML="ZLAAAAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

}

renderCheckboxCategories(host: HTMLElement, categorieList: Array<any>){
    categorieList.forEach(cetegorie => {
        let cetegorieDiv = createHtmlElement(host,"div", "cetegorieDiv");
        let categorieTitle = createHtmlElement(cetegorieDiv,"span", "categorieTitle");
        categorieTitle.innerHTML= cetegorie.title;

        let categorieElementsWrapperDiv = createHtmlElement(cetegorieDiv, "div", "cetegorieDiv");
        let categorieElementsCollapseDiv = createHtmlElement(cetegorieDiv, "div", "categorieElementsCollapseDiv collapse mt-3");
        categorieElementsCollapseDiv.id=cetegorie.name;

        if(cetegorie.values.length > NUM_OF_VISABLE_OPTIONS) {

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
            if(index < NUM_OF_VISABLE_OPTIONS){
                renderCheckBox(categorieElementsWrapperDiv,value,cetegorie.name);
            }
            else{
                renderCheckBox(categorieElementsCollapseDiv,value,cetegorie.name);
            }
           
        });

        // let filterSubject = new BehaviorSubject(cetegorieDiv).pipe(
        //     map(() => (<HTMLInputElement>ev.target).value),
        //     );
        //     filterSubject.subscribe((el) => {
        //         console.log(el);
        //     })
        
    fromEvent(cetegorieDiv, "input").pipe(
        map((ev: InputEvent) => ({
            filterName: (<HTMLInputElement>ev.target).name,
            inputValue: (<HTMLInputElement>ev.target).value, 
            checked: (<HTMLInputElement>ev.target).checked
        }),
        )).subscribe((el) => {
            this.updateFilterList(el);
           // console.log(el);
        });



    });


}

updateFilterList(checkboxSelectObject :any){
    if(this.returnIndexOfElementByName(checkboxSelectObject.filterName) == -1){
        this.filterList.push({
            name: checkboxSelectObject.filterName,
            values: [checkboxSelectObject.inputValue]
        });
    }
    else {
        if(checkboxSelectObject.checked){
            this.filterList[this.returnIndexOfElementByName(checkboxSelectObject.filterName)]
                .values.push(checkboxSelectObject.inputValue);
        }
        else{
            const index = this.returnIndexOfElementByName(checkboxSelectObject.filterName);
            this.filterList[index].values = this.filterList[index]
                .values.filter(value => value != <string>(checkboxSelectObject.inputValue));
            
            if(this.filterList[index].values.length == 0){
                this.filterList.splice(index,1);
            }
            

        }
    }
    //console.log(this.filterList);
    this.filterMonitor.subscribe(
        x => console.log(x)
    );
}

}