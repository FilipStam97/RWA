import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';


@Component({
  selector: 'app-game-thumb',
  templateUrl: './game-thumb.component.html',
  styleUrls: ['./game-thumb.component.scss']
})
export class GameThumbComponent implements OnInit {

  @Input() game: Game | null=null;
  constructor() { }

  ngOnInit(): void {
   
  
  }

}
