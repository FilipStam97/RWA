import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from './models/movie';
import { TestServiceService } from './services/test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SteamShelves';
 selectedMovie: Observable<Movie | null> = of(null);

 constructor(private movieService: TestServiceService){

 }

 handleMovieSelection(movieId: number){

  // sideeffect kad se delilo po referenci sa event bubblingom je da se sam objekat delio po referenci i onda se live menjao score
  // to je bio sideefect jer je ista instanca movia ali moze da bude opasan ovoe je bio prelude za state management
  // $event je rezervisana rec za event , za event emmiter
   this.selectedMovie=this.movieService.getByID(movieId);
 }
}
