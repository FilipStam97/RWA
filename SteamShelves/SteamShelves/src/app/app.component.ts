import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Movie } from './models/movie';
import { TestServiceService } from './services/test-service.service';
import { AppState } from './store/app-state';
import { selectSelectedMovie } from './store/test-selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // subscripcije se stavljaju u onInit , zato implementiramo on init
  title = 'SteamShelves';
 selectedMovie: Observable<Movie | null> = of(null);

  ngOnInit() {
    // this.store.select(state => state.movies.selectedMovieID)
    //sada sa selectorom
    this.selectedMovie = this.store.select(selectSelectedMovie);
  }

 constructor(private store: Store<AppState>){

 }

 handleMovieSelection(movieId: number){

  // sideeffect kad se delilo po referenci sa event bubblingom je da se sam objekat delio po referenci i onda se live menjao score
  // to je bio sideefect jer je ista instanca movia ali moze da bude opasan ovoe je bio prelude za state management
  // $event je rezervisana rec za event , za event emmiter
  
  
  //this.selectedMovie=this.movieService.getByID(movieId);
 }
}
