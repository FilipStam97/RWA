import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { TestServiceService } from 'src/app/services/test-service.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {
//preporuka je da imamo movies ili slicne podatke kao observables da bi smo izbeli probleme kao na pr 
//subscripcije koje mogu da ostanu i kad ubijemo komponentu
// u html templejtu se to resava typovima 
  movies: Observable<Movie[]> = of([]);

  @Output() onSelectedMovie : EventEmitter<number> = new EventEmitter<number>();
  constructor(private movieService: TestServiceService) { }

  ngOnInit(): void {
    
    this.movies = this.movieService.getAll();
  }

  selectMovie(movie: Movie){
    this.onSelectedMovie.emit(movie.id);
  }

}
