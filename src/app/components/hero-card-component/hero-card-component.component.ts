import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TeamBuilderComponent } from '../team-builder-component/team-builder-component.component';
import { StatsComponent } from '../stats-component/stats-component.component';
// import { HeroListComponent } from '../hero-list-component/hero-list-component.component';

@Component({
  selector: 'card-hero',
  standalone: true,
  imports: [TeamBuilderComponent,StatsComponent],
  templateUrl: './hero-card-component.component.html',
  styleUrl: './hero-card-component.component.css'
})
export class HeroCardComponent   {

  @Input() carta: any;

   @Output() favorito = new EventEmitter<any>();
  // @Output() team: any;

  constructor(){}

  seleccionfav(){
    this.favorito.emit(this.carta);
  }

}
