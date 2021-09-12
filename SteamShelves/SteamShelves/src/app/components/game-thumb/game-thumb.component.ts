import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Game } from 'src/app/models/game';
import { AppState } from 'src/app/store/app.state';
import { selectGameByAppId } from 'src/app/store/games/games.selectors';

@Component({
  selector: 'app-game-thumb',
  templateUrl: './game-thumb.component.html',
  styleUrls: ['./game-thumb.component.scss']
})
export class GameThumbComponent implements OnInit {

  @Input() gameID: number | null =null;
  game: Game | null=null;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    if(this.gameID !=null){
      this.store.select(selectGameByAppId(this.gameID)).subscribe(
        game => this.game=game
      )
    }
  }

}
