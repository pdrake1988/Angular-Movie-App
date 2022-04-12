import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieData} from "./interfaces/MovieData";
import {Subscription} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-nothing',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit, OnDestroy {
  genreId = '';
  monetization = '';
  sortBy = '';
  page = '';
  movies?: MovieData;
  showOffcanvas = false;
  private movieSubscription: Subscription = new Subscription;
  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.genreId = params.get('genreId') ?? 'default';
      this.monetization = params.get('monetization') ?? 'flatrate';
      this.sortBy = params.get('sortBy') ?? 'popularity.desc';
      this.page = params.get('page') ?? '1';
      this.movieSubscription = this.moviesData(this.genreId, this.monetization, this.sortBy, this.page)
        .subscribe(res => this.movies = {...res});
    });

  }
  moviesData(genreId: string, monetization: string, sortBy: string, page: string) {
    if (genreId === 'default') {
      return this.httpClient.get<MovieData>('https://api.themoviedb.org/3/discover/movie', {
        params: {
          api_key: 'e2e4f004450c3b2d09d61c0fb5120d06',
          language: 'en-US',
          sort_by: sortBy,
          watch_region: 'US',
          with_watch_monetization_types: monetization,
          include_adult: false,
          include_video: true,
          page: page
        }
      });
    } else {
      return this.httpClient.get<MovieData>('https://api.themoviedb.org/3/discover/movie', {
        params: {
          api_key: 'e2e4f004450c3b2d09d61c0fb5120d06',
          language: 'en-US',
          with_genres: genreId,
          sort_by: sortBy,
          watch_region: 'US',
          with_watch_monetization_types: monetization,
          include_adult: false,
          include_video: true,
          page: page
        }
      });
    }
  }
  ngOnDestroy(): void {
    this.movieSubscription.unsubscribe();
  }
}
