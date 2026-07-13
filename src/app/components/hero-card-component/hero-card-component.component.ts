import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { TeamBuilderComponent } from '../team-builder-component/team-builder-component.component';
import { StatsComponent } from '../stats-component/stats-component.component';
import { Emogipipe } from '../../pipes/emogi.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'card-hero',
  standalone: true,
  imports: [StatsComponent,Emogipipe,RouterLink],
  templateUrl: './hero-card-component.component.html',
  styleUrl: './hero-card-component.component.css'
})
export class HeroCardComponent   {

   @Input()
  set client(valor: any) {
    this._client = valor;
    if (valor) {
      console.log('Mongoclient sirve [client]! Datos:', valor);
    }
  }
  get client(): any {
    return this._client;
  }

   @Input() carta: any;

   @Output() favorito = new EventEmitter<any>();

   @Output() team = new EventEmitter<any>();

   @Input() boton : boolean = true;

   @Input() local : boolean = false;

    private _client: any;


//  public url="https://www.superherodb.com/pictures2/portraits/10/100/167.jpg";



  constructor(){}
  seleccionfav(){
    this.favorito.emit(this.carta);
  }

  selectteam(){
    this.team.emit(this.carta);
  }
}
