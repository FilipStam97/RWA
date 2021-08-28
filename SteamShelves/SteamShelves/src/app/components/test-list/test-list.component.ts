import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { TestServiceService } from 'src/app/services/test-service.service';
import { AppState } from 'src/app/store/app-state';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {
//preporuka je da imamo movies ili slicne podatke kao observables da bi smo izbeli probleme kao na pr 
//subscripcije koje mogu da ostanu i kad ubijemo komponentu
// u html templejtu se to resava typovima 
  movies: Observable<readonly Movie[]> = of([]);

  @Output() onSelectedMovie : EventEmitter<number> = new EventEmitter<number>();
  //constructor(private movieService: TestServiceService) { }
  constructor(private store: Store<AppState>) { }


  ngOnInit(): void {
    
  //  this.movies = this.movieService.getAll();
  // treba da postoji separacija, komponente rade sa storom a store radi sa apijem
  //komponente ne bi trebalo da imaju pristup apiju
  //komponente samo slusaju store i reaguju

  this.movies = this.store.select(state => state.movies.allMovies);
  //ne radi se ovako koriste se selektori ali za primer sada
  }

  selectMovie(movie: Movie){
    this.onSelectedMovie.emit(movie.id);
  }

}
