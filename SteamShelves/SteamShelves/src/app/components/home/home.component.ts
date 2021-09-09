import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent, Observable, of } from 'rxjs';
import { debounceTime, filter, map, switchMap } from 'rxjs/operators';
import { SearchObject } from 'src/app/models/searchObject';
import { SearchService } from 'src/app/services/search.service';
const DEBOUNCE_TIME_VALUE = 400;
const SEARCH_INPUT_MIN_LENGTH =3;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewInit {
  //myControl = new FormControl();
  //searchValue: string | null=null;
  SearchValues: Observable<readonly SearchObject[]> = of([]);
  constructor(private searchService: SearchService) { }

  @ViewChild('input', {static: false}) input: ElementRef | undefined;
  
  ngOnInit(): void {
    
    
    this.SearchValues = this.searchService.getSearchResults("DOOM");
    console.log(this.SearchValues);
  }

  ngAfterViewInit() {
    // fromEvent(this.input?.nativeElement, 'keyup')
    // .pipe(
    //     debounceTime(DEBOUNCE_TIME_VALUE),
    //     map((ev: InputEvent) => (<HTMLInputElement>ev.target).value),
    //     filter(input => input.length >= SEARCH_INPUT_MIN_LENGTH),
    //     switchMap( value => 
    //         this.getSearchResults(value)
    //     )
    // )
  }

  displayFn(searchValue: SearchObject): string {
    return searchValue && searchValue.name ? searchValue.name : '';
  }

  searchFunction() {
    
  }

}
