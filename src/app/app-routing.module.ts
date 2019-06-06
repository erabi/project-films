import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movies/movie-list/movie-list.component';

const appRoutes: Routes = [
  { path: '', component : MovieListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,
    { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
