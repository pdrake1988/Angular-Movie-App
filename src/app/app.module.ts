import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './movies-page/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { OffcanvasComponent } from './movies-page/header/offcanvas/offcanvas.component';
@NgModule({
  declarations: [
    AppComponent,
    MoviesPageComponent,
    HeaderComponent,
    OffcanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
