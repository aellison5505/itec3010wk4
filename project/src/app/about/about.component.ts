import { Component, OnInit } from '@angular/core';
import {RouteIndexService} from '../route-index.service';

@Component({
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  constructor(private routes: RouteIndexService) { }

  ngOnInit() {
    this.routes.setIndex(4);

  }

}
