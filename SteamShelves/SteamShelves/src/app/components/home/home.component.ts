import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { SearchObject } from 'src/app/models/searchObject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myControl = new FormControl();
  SearchValues: Observable<readonly SearchObject[]> = of([]);
  constructor() { }

  ngOnInit(): void {
  }

  // displayFn(app: ): string {
  //   return user && user.name ? user.name : '';
  // }

  searchFunction() {
    
  }

}
