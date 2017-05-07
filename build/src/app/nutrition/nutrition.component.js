import { Component } from '@angular/core';
import { RouteIndexService } from '../route-index.service';
export class NutritionComponent {
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
        this.routes.setIndex(2);
    }
}
NutritionComponent.decorators = [
    { type: Component, args: [{
                templateUrl: './nutrition.component.html'
            },] },
];
/**
 * @nocollapse
 */
NutritionComponent.ctorParameters = () => [
    { type: RouteIndexService, },
];
function NutritionComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NutritionComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NutritionComponent.ctorParameters;
    /** @type {?} */
    NutritionComponent.prototype.routes;
}
