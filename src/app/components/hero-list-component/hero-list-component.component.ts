import { Component, OnInit } from '@angular/core';
// import { HeroService } from '../../services/hero-service.service';
import { ApiheroService } from '../../services/apihero.service';
import { HeroCardComponent } from '../hero-card-component/hero-card-component.component';
import { SearchBarComponent } from '../search-bar-component/search-bar-component.component';
import { TeamBuilderComponent } from '../team-builder-component/team-builder-component.component';
import { StatsComponent } from '../stats-component/stats-component.component';

@Component({
  selector: 'List-hero',
  imports: [HeroCardComponent, SearchBarComponent, TeamBuilderComponent, StatsComponent],
  templateUrl: './hero-list-component.component.html',
  styleUrl: './hero-list-component.component.css'
})

export class HeroListComponent implements OnInit {

public listhero: any[] =[];

private heroo: any[] = [];

public team: any[] = [];

  constructor(public hero: ApiheroService){}

  ngOnInit(): void {



  }


  addfav(favh:any){
    const findhe = this.heroo.find(h => h.id === favh.id);
    if(findhe){
      findhe.favoritos = !findhe.favoritos;
    }
  }
  favlist() {
  return this.listhero.filter(h => h.favoritos === true);

}

  addteam(teamh:any){
    const exis = this.team.find(h => h.id === teamh.id);
    const teamli = Array.from(this.team);
    if(exis){
      alert("ya existe");
    return;
    }
    if(this.team.length >= 5){
      alert("El equipo esta lleno");
      return;
    }

    teamli.push(teamh);

    this.team = teamli;
  }

  teamlist(){
    return this.team;
  }



}


