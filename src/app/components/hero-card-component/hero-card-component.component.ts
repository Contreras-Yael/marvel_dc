import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { TeamBuilderComponent } from '../team-builder-component/team-builder-component.component';
import { StatsComponent } from '../stats-component/stats-component.component';
import { Emogipipe } from '../../pipes/emogi.pipe';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'card-hero',
  standalone: true,
  imports: [StatsComponent,Emogipipe],
  templateUrl: './hero-card-component.component.html',
  styleUrl: './hero-card-component.component.css'
})
export class HeroCardComponent   {

  @Input() carta: any;

   @Output() favorito = new EventEmitter<any>();

   @Output() team = new EventEmitter<any>();


  public url="https://www.superherodb.com/pictures2/portraits/10/100/167.jpg";

  constructor(){}

//   get hero_inf() {
//   if (!this.carta?.biography) return [];
//   return Object.entries(this.carta.biography);
//  }
//  @for (item of stats; track $index) {
//       <p>{{item[0]}}: {{item[1]}}</p>
//     }

//   get stats(){
//     if(!this.carta?.powerstats)return[];
//     return Object.entries(this.carta.powerstats);
//   }

  seleccionfav(){
    this.favorito.emit(this.carta);
  }

  selectteam(){
    this.team.emit(this.carta);
  }



}
