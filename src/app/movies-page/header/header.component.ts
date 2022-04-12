import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewContainerRef} from '@angular/core';
import {TemplatePortal} from "@angular/cdk/portal";
import {Overlay} from "@angular/cdk/overlay";
import {HttpClient} from "@angular/common/http";
import {MovieGenres} from "../interfaces/MovieGenres";
import {Subscription} from "rxjs";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('open') open = new EventEmitter<any>();
  constructor() { }
  ngOnInit(): void {
  }

}
