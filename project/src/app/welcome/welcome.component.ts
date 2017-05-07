import { Component, OnInit } from '@angular/core';
import {RouteIndexService} from '../route-index.service';

@Component({
  templateUrl: './welcome.component.html'
})

export class WelcomeComponent implements OnInit {

  constructor(private routes: RouteIndexService) { }

  ngOnInit() {
    this.routes.setIndex(0);

  }

}
