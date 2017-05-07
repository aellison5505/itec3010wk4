import { Component } from '@angular/core';
import { RouteIndexService } from '../route-index.service';
export class AboutComponent {
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
        this.routes.setIndex(4);
    }
}
AboutComponent.decorators = [
    { type: Component, args: [{
                templateUrl: './about.component.html'
            },] },
];
/**
 * @nocollapse
 */
AboutComponent.ctorParameters = () => [
    { type: RouteIndexService, },
];
function AboutComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AboutComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    AboutComponent.ctorParameters;
    /** @type {?} */
    AboutComponent.prototype.routes;
}
