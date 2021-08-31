import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // subscripcije se stavljaju u onInit , zato implementiramo on init
  title = 'SteamShelves';


  ngOnInit() {
 
  }

 constructor(){

 }

 handleMovieSelection(movieId: number){

  // sideeffect kad se delilo po referenci sa event bubblingom je da se sam objekat delio po referenci i onda se live menjao score
  // to je bio sideefect jer je ista instanca movia ali moze da bude opasan ovoe je bio prelude za state management
  // $event je rezervisana rec za event , za event emmiter
  
  
  //this.selectedMovie=this.movieService.getByID(movieId);
 }
}
