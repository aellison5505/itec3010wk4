import { Component } from '@angular/core';
import { RouteIndexService } from '../route-index.service';
export class HealthComponent {
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
        this.routes.setIndex(1);
    }
}
HealthComponent.decorators = [
    { type: Component, args: [{
                templateUrl: './health.component.html'
            },] },
];
/**
 * @nocollapse
 */
HealthComponent.ctorParameters = () => [
    { type: RouteIndexService, },
];
function HealthComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    HealthComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    HealthComponent.ctorParameters;
    /** @type {?} */
    HealthComponent.prototype.routes;
}
