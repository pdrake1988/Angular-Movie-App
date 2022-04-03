import {Component, Input, OnInit} from '@angular/core';
import {MovieGenres} from "../interfaces/MovieGenres";
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.css']
})
export class OffcanvasComponent implements OnInit {
  movieGenres?: MovieGenres;
  @Input('genreId') genre = '';
  @Input('monetization') monetization = '';
  @Input('sort') sort = '';
  @Input('page') page = '';
  subscription: Subscription = new Subscription();
  show = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.subscription = this.http.get<MovieGenres>('https://api.themoviedb.org/3/genre/movie/list', {
      params: {
        api_key: 'e2e4f004450c3b2d09d61c0fb5120d06',
        language: 'en-US'
      }
    }).subscribe(res => this.movieGenres = {...res});
  }
}
