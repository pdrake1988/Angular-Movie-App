import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MovieData} from "./interfaces/MovieData";

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  constructor(private httpClient: HttpClient) { }

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
}
