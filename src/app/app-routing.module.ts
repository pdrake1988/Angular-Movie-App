import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesPageComponent} from "./movies-page/movies-page.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'getMovies/:genreId/:monetization/:sortBy/:page', component: MoviesPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
