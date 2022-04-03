import {Component, OnDestroy, OnInit} from '@angular/core';
import {GetMoviesService} from "./get-movies.service";
import {MovieData} from "./interfaces/MovieData";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Subscription} from "rxjs";
import {Overlay} from "@angular/cdk/overlay";
import {ComponentPortal} from "@angular/cdk/portal";
import {OffcanvasComponent} from "./offcanvas/offcanvas.component";

@Component({
  selector: 'app-nothing',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit, OnDestroy {
  movies?: MovieData;
  private movieSubscription: Subscription = new Subscription;
  genreId = '';
  monetization = '';
  sortBy = '';
  page = '';
  constructor(private getMovies: GetMoviesService,
              private route: ActivatedRoute,
              private overlay: Overlay) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.genreId = params.get('genreId') ?? 'default';
      this.monetization = params.get('monetization') ?? 'flatrate';
      this.sortBy = params.get('sortBy') ?? 'popularity.desc';
      this.page = params.get('page') ?? '1';
    });
    this.movieSubscription = this.getMovies.moviesData(this.genreId, this.monetization, this.sortBy, this.page)
      .subscribe(res => this.movies = {...res});
  }
  openMenu() {
    const overlayRef = this.overlay.create();
    const overlayComponent = new ComponentPortal(OffcanvasComponent);
    overlayRef.attach(overlayComponent);
  }
  ngOnDestroy(): void {
    this.movieSubscription.unsubscribe();
  }
}
