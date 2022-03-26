import { Component, OnInit } from '@angular/core';
import {GetMoviesService} from "./get-movies.service";
import {MovieData} from "./interfaces/movie-data";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-nothing',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {
  movies?: MovieData;
  private genreId = 'default';
  private monetization = 'flatrate';
  private sortBy = 'popularity.desc';
  private page = '1';
  constructor(private getMovies: GetMoviesService,
              private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.genreId = params.get('genreId') ?? 'default';
      this.monetization = params.get('monetization') ?? 'flatrate';
      this.sortBy = params.get('sortBy') ?? 'popularity.desc';
      this.page = params.get('page') ?? '1';
    });
    if (this.genreId === 'default') {
      this.getMovies.moviesData(this.monetization, this.sortBy, this.page, this.genreId)
        .subscribe((movieData: MovieData) => {
          console.log(movieData)
          this.movies = {...movieData};
        });
    }
  }
}
