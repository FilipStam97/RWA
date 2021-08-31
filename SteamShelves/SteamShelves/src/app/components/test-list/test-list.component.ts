import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Movie } from 'src/app/models/movie';
import { TestServiceService } from 'src/app/services/test-service.service';
import { AppState } from 'src/app/store/app-state';
import * as MovieActions from 'src/app/store/test-actions';
import { selectAllMovies } from 'src/app/store/test-selectors';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
  //akos tavimo change detection strategy on push samo kad store napravi promenu updatovace se komponenta pri cemu se stedi na nepotrebnom updatovanju, app je dosta brzi
})
export class TestListComponent implements OnInit {
//preporuka je da imamo movies ili slicne podatke kao observables da bi smo izbeli probleme kao na pr 
//subscripcije koje mogu da ostanu i kad ubijemo komponentu
// u html templejtu se to resava typovima 
  movies: Observable<readonly Movie[]> = of([]);

  //@Output() onSelectedMovie : EventEmitter<number> = new EventEmitter<number>();
  //emiter vise ne treba jer sada samo dispacujemo akciju
  //constructor(private movieService: TestServiceService) { }
  constructor(private store: Store<AppState>, private movieService: TestServiceService) { }


  ngOnInit(): void {
    
  //  this.movies = this.movieService.getAll();
  // treba da postoji separacija, komponente rade sa storom a store radi sa apijem
  //komponente ne bi trebalo da imaju pristup apiju
  //komponente samo slusaju store i reaguju
  // this.movieService.getAll().subscribe(movies =>
  //   //okida se akcija
  //   //ovako se ne radi jer se ne dispecuju akcije iz subscribea, ali trenutno radi testa
  //   this.store.dispatch(MovieActions.loadMovies({movies: movies}))
  // )
 // this.movies = this.store.select(state => state.movies.allMovies);
  //ne radi se ovako koriste se selektori ali za primer sada
  // store i reducer ne smeju da kontaktiraju api direktno, pogotovo reducer koji je cista funkcija ne sme to da radi 
  //za to se koreiste efekti
  //this.store.dispatch(MovieActions.loadMovies())

  //sad sa selektorom
  this.movies = this.store.select(selectAllMovies);
  }

  selectMovie(movie: Movie){
    this.store.dispatch(MovieActions.selectMovie({movieID: movie.id}));
    //this.onSelectedMovie.emit(movie.id);
  }

}
