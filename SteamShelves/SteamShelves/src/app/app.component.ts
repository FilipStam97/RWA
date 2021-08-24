import { Component } from '@angular/core';
import { Movie } from './models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SteamShelves';
  movie1: Movie = {
    id: 1,
    title: "LOTR 1",
    description: "LOTR 1 is a based movie",
    cover: "https://upload.wikimedia.org/wikipedia/sr/c/cd/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring.jpg",
    score: 8.8
  }

  movie2: Movie = {
    id: 1,
    title: "LOTR 2",
    description: "LOTR 2 is a based movie",
    cover: "https://upload.wikimedia.org/wikipedia/sr/5/59/The_Lord_of_the_Rings_The_Two_Towers.jpg",
    score: 9.5
  }
}
