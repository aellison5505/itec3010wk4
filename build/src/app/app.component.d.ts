import { RouteIndexService } from './route-index.service';
import { Router } from '@angular/router';
export declare class AppComponent {
    private currentIndex;
    private router;
    SWIPE_ACTION: {
        LEFT: string;
        RIGHT: string;
    };
    routes: string[];
    constructor(currentIndex: RouteIndexService, router: Router);
    swipe(action?: string): void;
}
