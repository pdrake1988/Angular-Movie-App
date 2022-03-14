import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesPageComponent} from "./movies-page/movies-page.component";

const routes: Routes = [
  {path: ' ', pathMatch: 'full', redirectTo: '/:genreId/:monetization/:sortBy/:page'},
  {path: '/:genreId/:monetization/:sortBy/:page', pathMatch: 'full', component: MoviesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
