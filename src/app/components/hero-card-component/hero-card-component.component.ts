import { Component, Input } from '@angular/core';
// import { HeroListComponent } from '../hero-list-component/hero-list-component.component';

@Component({
  selector: 'card-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero-card-component.component.html',
  styleUrl: './hero-card-component.component.css'
})
export class HeroCardComponent   {

  @Input() carta: any;

  constructor(){}
}
