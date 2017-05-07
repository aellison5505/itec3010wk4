import { Component, OnInit } from '@angular/core';
import {RouteIndexService} from '../route-index.service';

@Component({
  templateUrl: './fitness.component.html'
})
export class FitnessComponent implements OnInit {

  constructor(private routes: RouteIndexService) { }

  ngOnInit() {
    this.routes.setIndex(3);

  }

}
