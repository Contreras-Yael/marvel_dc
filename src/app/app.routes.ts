import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { DetalleHerComponent } from './pages/detalle-her/detalle-her.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Home",component:HomeComponent},
  {path:"Recruit",component:AboutUsComponent},
  {path:"Heroes",component:HeroesComponent},
  {path:"Heroes/:id",component:DetalleHerComponent},
  {path:"Ranking",component:RankingComponent},
  {path:"**",component:ErrorComponent},
  // {},
];
