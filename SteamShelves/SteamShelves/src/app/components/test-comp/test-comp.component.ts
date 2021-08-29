import { Component, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from 'src/app/models/movie';
import { AppState } from 'src/app/store/app-state';
import { setRating } from 'src/app/store/test-actions';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.scss']
})
export class TestCompComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
//ako se ne stavi nista public je
  @Input() movie: Movie | null = null;
  //@Output() setRating: Even
  // ovo bi bilo povoljno ali je komplikovano sada na casu pa ce uveze store samo

  ngOnInit(): void {
  }

  rate(){
    // if(this.movie){
    //   // ne sme da bude 0, null ili undefined, nullish vrednosti , to kaze sintaksa,
    //   //also *ngIf kaze da ako je movie tj nije null onda ce da renderuje da ne bi prslo ako je null
    //   this.movie.score += 0.2; 
    // }
    // e sad, bolje je da ovo bude dmbu komponenta pa da emitujemo roditelju i on da promeni rating
    //jer ovde nemamo store
    if(this.movie){
    this.store.dispatch(setRating({movieID: this.movie.id, newRating: this.movie.score + 0.2}));
    }
  }
  
}
