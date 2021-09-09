import { Component, Input, OnInit } from '@angular/core';
import { Shelve } from 'src/app/models/shelve';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {

  @Input() shelve: Shelve | null =null;
  constructor() { }

  ngOnInit(): void {
  }

}
