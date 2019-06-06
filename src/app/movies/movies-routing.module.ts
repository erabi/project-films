import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { RouterModule } from '@angular/router';

const moviesRoutes = [
  { path: 'movie/:id', component: MovieCardComponent },
  { path: 'movies', component: MovieListComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(moviesRoutes)
  ]
})
export class MoviesRoutingModule { }
