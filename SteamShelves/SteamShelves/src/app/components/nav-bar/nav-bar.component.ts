import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loadShelves } from 'src/app/store/shelves/shelves.actions';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
 
  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadShelves({userID:"613665d6e3680d3ed55d6d88"}));
  }

}
