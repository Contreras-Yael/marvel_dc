import { Component } from '@angular/core';
import { HeroListComponent } from '../../components/hero-list-component/hero-list-component.component';
import { HeroCardComponent } from '../../components/hero-card-component/hero-card-component.component';

@Component({
  selector: 'home-page',
  imports: [HeroListComponent, HeroCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
