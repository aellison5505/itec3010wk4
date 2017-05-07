import { Component } from '@angular/core';
import { RouteIndexService } from '../route-index.service';
export class WelcomeComponent {
    /**
     * @param {?} routes
     */
    constructor(routes) {
        this.routes = routes;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.routes.setIndex(0);
    }
}
WelcomeComponent.decorators = [
    { type: Component, args: [{
                templateUrl: './welcome.component.html'
            },] },
];
/**
 * @nocollapse
 */
WelcomeComponent.ctorParameters = () => [
    { type: RouteIndexService, },
];
function WelcomeComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    WelcomeComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    WelcomeComponent.ctorParameters;
    /** @type {?} */
    WelcomeComponent.prototype.routes;
}
