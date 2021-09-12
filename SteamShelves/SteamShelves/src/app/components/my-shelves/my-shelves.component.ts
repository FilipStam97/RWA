import { Component, OnInit } from '@angular/core';
import { Shelve } from 'src/app/models/shelve';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectAllShelves, selectAllGameIDs } from 'src/app/store/shelves/shelves.selectors';
import { loadGames } from 'src/app/store/games/games.actions';


@Component({
  selector: 'app-my-shelves',
  templateUrl: './my-shelves.component.html',
  styleUrls: ['./my-shelves.component.scss']
})
export class MyShelvesComponent implements OnInit {
  gameIDs: Observable<number[]> = of([]);
  shelves: Observable<readonly Shelve[]> = of([]);
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.shelves = this.store.select(selectAllShelves);
    this.gameIDs = this.store.select(selectAllGameIDs);
    this.gameIDs.subscribe(
      IDArray =>
      { 
        if(IDArray.length != 0){
        this.store.dispatch(loadGames({gameIDs: IDArray}))
        }
      }
    )


  
  }

}
