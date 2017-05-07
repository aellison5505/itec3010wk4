import { OnInit } from '@angular/core';
import { RouteIndexService } from '../route-index.service';
export declare class NutritionComponent implements OnInit {
    private routes;
    constructor(routes: RouteIndexService);
    ngOnInit(): void;
}
