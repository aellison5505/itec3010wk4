import { Component, OnInit } from '@angular/core';
import {RouteIndexService} from '../route-index.service';

@Component({
  templateUrl: './health.component.html'
})
export class HealthComponent implements OnInit {

  constructor(private routes: RouteIndexService) { }

  ngOnInit() {
    this.routes.setIndex(1);

  }
}
