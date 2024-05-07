import { Routes } from '@angular/router';
import { SamplePageComponent } from './sample-page/sample-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const pagesRoutes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    component: SamplePageComponent,
    path: "sample-page"
  }
];
