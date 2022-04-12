import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesPageComponent} from "./movies-page/movies-page.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: 'getMovies/:genreId/:monetization/:sortBy/:page', component: MoviesPageComponent},
  {path: '', pathMatch: 'full', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
