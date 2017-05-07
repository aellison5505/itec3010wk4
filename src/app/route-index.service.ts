import { Injectable } from '@angular/core';

@Injectable()
export class RouteIndexService {

  private currentIndex: number;

  constructor() {
    this.currentIndex=0;
  }

  getIndex():number {
    return this.currentIndex;
  }

  setIndex(index:number){
    this.currentIndex = index;
  }

}
