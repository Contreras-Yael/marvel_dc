import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero-service.service';
import { HeroCardComponent } from '../hero-card-component/hero-card-component.component';
import { SearchBarComponent } from '../search-bar-component/search-bar-component.component';
import { TeamBuilderComponent } from '../team-builder-component/team-builder-component.component';

@Component({
  selector: 'List-hero',
  imports: [HeroCardComponent, SearchBarComponent, TeamBuilderComponent],
  templateUrl: './hero-list-component.component.html',
  styleUrl: './hero-list-component.component.css'
})

export class HeroListComponent implements OnInit {

private heroo: any[] = [];

public resultbusc: any[] = [];

public listhero: any[] =[];

  constructor(public hero: HeroService){}

ngOnInit(): void {

  this.heroo = this.hero.ListHero;
  this.resultbusc = this.heroo;

  this.listhero = this.hero.ListHero;
  // console.log("Tiene datos?", this.listhero);
}

  addfav(favh:any){

    const findhe = this.heroo.find(h => h.id === favh.id);

    if(findhe){
      findhe.favoritos = !findhe.favoritos;
    }

  }

  get favoritos(){
    return this.listhero.filter(h => h.favoritos === true);
  }

  filtrado(textoRecibido: string){
    if(!textoRecibido){
      this.listhero = [...this.heroo];
      return;
    }

    const txtopeq = textoRecibido.toLowerCase();

    this.listhero = this.heroo.filter(
      heroe => heroe.nombre.toLowerCase().includes(txtopeq)
    )
  }

}


