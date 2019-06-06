import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../../../assets/data/movies.data';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  public movies = MOVIES;

  constructor() { }

  ngOnInit() {
  }

}
