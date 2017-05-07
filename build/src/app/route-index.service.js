import { Injectable } from '@angular/core';
export class RouteIndexService {
    constructor() {
        this.currentIndex = 0;
    }
    /**
     * @return {?}
     */
    getIndex() {
        return this.currentIndex;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setIndex(index) {
        this.currentIndex = index;
    }
}
RouteIndexService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
RouteIndexService.ctorParameters = () => [];
function RouteIndexService_tsickle_Closure_declarations() {
    /** @type {?} */
    RouteIndexService.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    RouteIndexService.ctorParameters;
    /** @type {?} */
    RouteIndexService.prototype.currentIndex;
}
