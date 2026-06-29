import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
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

private listhero  = inject(ApiheroService);
public heroService : any[] = [];
public heroo: any[] = [];
public team: any[] = [];
public favl: any[] = [];

  constructor(){
    effect(()=>{console.log(`Funciona el filto?`,this.filtros())})
  }

  ngOnInit(): void {
    this.cargahero();
    this.favcarg();
    this.teamcarg();
  }


cargahero(){
  this.listhero.sups_list().subscribe({
    next:(data) => {
      this.heroService = data;
      console.log('Cargado o eso parece', this.heroService);
    }});
  }

  favcarg(){
    const favs = localStorage.getItem('fav');
    if(favs){
      this.favl = JSON.parse(favs);
    }
  }

  teamcarg(){
    const team = localStorage.getItem('team');
    if(team){
      this.team = JSON.parse(team);
    }
  }




  aplicarFiltros(filtrosRecibidos: any) {
  this.filtros.set(filtrosRecibidos);
}

  filtros = signal({
    texto: '',
    editorial: 'Todos',
    moral: 'Todos'
  });

  busqueda = signal<string>('');

  items = computed(()=>{
    const listaCompleta = this.heroService;
    const { texto, editorial, moral } = this.filtros();

    const busqueda = texto.toLowerCase().trim();

    return listaCompleta.filter((heroe: any) => {

    const heroen = heroe.name ? heroe.name.toLowerCase() : '';
    const resultadon = heroen.includes(busqueda);

    const editorial_c = heroe.biography?.publisher || '';
    const resultadoe = editorial === 'Todos' || editorial_c === editorial;

    const mor_he = heroe.biography?.alignment || '';
    const resultadom = moral === 'Todos' || mor_he === moral;

    return resultadon && resultadoe && resultadom;
    });
  });

//======
  addfav(favh:any){
    const exis = this.favl.find(h => h.id === favh.id);
    if(exis){
      this.favl = this.favl.filter(h => h.id !== favh.id);
      console.log("prueba", favh.name);
    }else{
      this.favl.push(favh);
      console.log("prueba 2, agregado", favh.name)
    }
    localStorage.setItem('fav', JSON.stringify(this.favl));
  }

  favlist() {
  return this.favl;
}


//======
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

    localStorage.setItem('team', JSON.stringify(this.team));
  }

  teamlist(){
    return this.team;
  }
}




