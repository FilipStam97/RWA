import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Game } from 'src/app/models/game';
import { Shelve } from 'src/app/models/shelve';
import { AppState } from 'src/app/store/app.state';
import { selectGamesWithIds } from 'src/app/store/games/games.selectors';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {

  @Input() shelf: Shelve | null =null;
  shelfGames: Observable<Game[]> = of([]);
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    if(this.shelf) {
      this.shelfGames = this.store.select(selectGamesWithIds(this.shelf?.gameIDs))
    }
  }

}
