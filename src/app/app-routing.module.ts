import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesPageComponent} from "./movies-page/movies-page.component";

const routes: Routes = [
  {path: 'getMovies/:genreId/:monetization/:sortBy/:page', component: MoviesPageComponent},
  {path: '', pathMatch: 'full', component: MoviesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
