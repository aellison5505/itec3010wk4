import { Component } from '@angular/core';
import { RouteIndexService } from '../route-index.service';
export class FitnessComponent {
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
        this.routes.setIndex(3);
    }
}
FitnessComponent.decorators = [
    { type: Component, args: [{
                templateUrl: './fitness.component.html'
            },] },
];
/**
 * @nocollapse
 */
FitnessComponent.ctorParameters = () => [
    { type: RouteIndexService, },
];
function FitnessComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FitnessComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    FitnessComponent.ctorParameters;
    /** @type {?} */
    FitnessComponent.prototype.routes;
}
