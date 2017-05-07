import { Component } from '@angular/core';
import { RouteIndexService } from './route-index.service';
import { Router } from '@angular/router';
export class AppComponent {
    /**
     * @param {?} currentIndex
     * @param {?} router
     */
    constructor(currentIndex, router) {
        this.currentIndex = currentIndex;
        this.router = router;
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
        this.routes = [
            '/welcome',
            '/health',
            '/nutrition',
            '/fitness',
            '/about'
        ];
    }
    /**
     * @param {?=} action
     * @return {?}
     */
    swipe(action = this.SWIPE_ACTION.RIGHT) {
        if (action === this.SWIPE_ACTION.RIGHT) {
            let /** @type {?} */ cIx = this.currentIndex.getIndex();
            //  window.alert('right ' +cIx);
            cIx--;
            if (cIx < 0) {
                return;
            }
            else {
                this.router.navigateByUrl(this.routes[cIx]);
            }
        }
        // swipe left, previous avatar
        if (action === this.SWIPE_ACTION.LEFT) {
            let /** @type {?} */ cIx = this.currentIndex.getIndex();
            //window.alert('left ' +cIx);
            cIx++;
            if (cIx >= this.routes.length) {
                return;
            }
            else {
                this.router.navigateByUrl(this.routes[cIx]);
            }
        }
    }
}
AppComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-root',
                templateUrl: './app.component.html'
            },] },
];
/**
 * @nocollapse
 */
AppComponent.ctorParameters = () => [
    { type: RouteIndexService, },
    { type: Router, },
];
function AppComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    AppComponent.ctorParameters;
    /** @type {?} */
    AppComponent.prototype.SWIPE_ACTION;
    /** @type {?} */
    AppComponent.prototype.routes;
    /** @type {?} */
    AppComponent.prototype.currentIndex;
    /** @type {?} */
    AppComponent.prototype.router;
}
