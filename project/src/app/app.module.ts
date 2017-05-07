import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { HealthComponent } from './health/health.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { FitnessComponent } from './fitness/fitness.component';
import { AboutComponent } from './about/about.component';

import {RouteIndexService} from './route-index.service';
import 'hammerjs';

const appRoutes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'health', component: HealthComponent },
    { path: 'nutrition', component: NutritionComponent },
    { path: 'fitness', component: FitnessComponent },
    { path: 'about', component: AboutComponent },
    {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }, {
    path: '**',
    redirectTo: '/welcome'
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    HealthComponent,
    NutritionComponent,
    FitnessComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  providers: [ RouteIndexService ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
