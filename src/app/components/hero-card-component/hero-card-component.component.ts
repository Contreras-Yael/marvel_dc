import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { TeamBuilderComponent } from '../team-builder-component/team-builder-component.component';
import { StatsComponent } from '../stats-component/stats-component.component';
import { Emogipipe } from '../../pipes/emogi.pipe';
import { RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'card-hero',
  standalone: true,
  imports: [StatsComponent,Emogipipe,RouterLink,NgStyle],
  templateUrl: './hero-card-component.component.html',
  styleUrl: './hero-card-component.component.css'
})
export class HeroCardComponent   {

   @Input()
  set client(valor: any) {
    this._client = valor;
  }
  get client(): any {
    return this._client;
  }

   @Input() carta: any;

   @Output() favorito = new EventEmitter<any>();

   @Input() favbool : boolean = false;

   @Input() teambool : boolean = false;

   @Output() team = new EventEmitter<any>();

   @Input() boton : boolean = true;

   @Input() local : boolean | null = false;

    private _client: any;

    @Input() tipo: string | number = '1';

//  public url="https://www.superherodb.com/pictures2/portraits/10/100/167.jpg";



  constructor(){}
  seleccionfav(){
    this.favorito.emit(this.carta);
  }

  selectteam(){
    this.team.emit(this.carta);
  }

  public manejarErrorImagen(event: Event): void {
  const imagenRota = event.target as HTMLImageElement;
  imagenRota.src = 'https://i.pinimg.com/736x/d5/3d/0b/d53d0b7f3cda265358fe712e4d2d45d4.jpg';
}

}
