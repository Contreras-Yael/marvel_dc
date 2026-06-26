import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Home",component:HomeComponent},
  {path:"Recruit",component:AboutUsComponent},
  {path:"**",component:ErrorComponent},
  // {},
];
