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
  @Input() movie: Movie = {
    id: 0,
    title: "",
    description: "",
    cover: "",
    score: 0
  }

  ngOnInit(): void {
  }

  rate(){
     this.movie.score += 0.2; 
  }

}
