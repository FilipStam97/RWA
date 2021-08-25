import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.scss']
})
export class TestCompComponent implements OnInit {

  constructor() { }
//ako se ne stavi nista public je
  @Input() movie: Movie | null = null;

  ngOnInit(): void {
  }

  rate(){
    if(this.movie){
      // ne sme da bude 0, null ili undefined, nullish vrednosti , to kaze sintaksa,
      //also *ngIf kaze da ako je movie tj nije null onda ce da renderuje da ne bi prslo ako je null
      this.movie.score += 0.2; 
    }
  }
  
}
