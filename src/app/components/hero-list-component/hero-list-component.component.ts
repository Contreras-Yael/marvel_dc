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

// public listb = this.hero.ListHero ;

public listhero: any[] =[];

  constructor(public hero: HeroService){}

ngOnInit(): void {
  this.listhero = this.hero.ListHero;

  console.log("Tiene datos?", this.listhero);
}

  addfav(favh:any){
    this.listhero = this.listhero.map(h=>{
        if (h.id === favh.id) {
        return {};
      }
      return h;
    })
  }

  get favoritos(){
    return this.listhero.filter(h => h.favoritos === true);
  }

  filtrado(bustex: string){
    if(!bustex){
      //this.listhero = this.listb;
      return;
    }
    //this.listhero = this.listb.filter(s=> s.h.nombre.toLowerCase().includes(textoRecibido.toLowerCase())    )
  }

}


