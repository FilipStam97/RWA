import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-test-thumb',
  templateUrl: './test-thumb.component.html',
  styleUrls: ['./test-thumb.component.scss']
})
export class TestThumbComponent implements OnInit {

  @Input() movie: Movie | null =null;
  @Output() onClick: EventEmitter<Movie> = new EventEmitter<Movie>();
  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    if(this.movie){
      this.onClick.emit(this.movie)

    }
  }

}
