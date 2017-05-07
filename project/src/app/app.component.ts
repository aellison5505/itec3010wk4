import { Component } from '@angular/core';
import {RouteIndexService} from './route-index.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight', UP: 'panup', DOWN: 'pandown' };
  routes = [
    '/welcome',
    '/health',
    '/nutrition',
    '/fitness',
    '/about'
  ];

  constructor(private currentIndex:RouteIndexService, private router:Router){

  }

  swipe(action = this.SWIPE_ACTION.RIGHT) {

        if (action === this.SWIPE_ACTION.RIGHT) {
          let cIx = this.currentIndex.getIndex();
      //  window.alert('right ' +cIx);
          cIx--;
          if(cIx < 0) {
            return;
          }else{
          this.router.navigateByUrl(this.routes[cIx]);
          }

        }

        // swipe left, previous avatar
        if (action === this.SWIPE_ACTION.LEFT) {
          let cIx = this.currentIndex.getIndex();
        //window.alert('left ' +cIx);
          cIx++;
          if(cIx >= this.routes.length) {
            return;
          }else{
          this.router.navigateByUrl(this.routes[cIx]);
          }
        }

          if (action === this.SWIPE_ACTION.UP) {
          //  window.alert('up ');
            window.scrollBy(0,15);
          }

          if (action === this.SWIPE_ACTION.DOWN) {
            //  window.alert('down ');
            window.scrollBy(0,-15);
          }



    }
}
