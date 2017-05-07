import { Component, OnInit } from '@angular/core';
import {RouteIndexService} from '../route-index.service';

@Component({
  templateUrl: './nutrition.component.html'
})
export class NutritionComponent implements OnInit {

  constructor(private routes: RouteIndexService) { }

  ngOnInit() {
    this.routes.setIndex(2);

  }

}
