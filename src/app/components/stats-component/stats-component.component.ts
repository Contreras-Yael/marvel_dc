import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero-service.service';

@Component({
  selector: 'stats-co',
  imports: [],
  templateUrl: './stats-component.component.html',
  styleUrl: './stats-component.component.css'
})
export class StatsComponent implements OnInit {

  constructor(public statherolist: HeroService){}

  public data: any[] = [];

  ngOnInit(): void {

    this.data = this.statherolist.ListHero;
  }

  get stat(){
    const stat = this.data;

    const top = this.data;

    const total = stat.length;

    const heroes = stat.filter(d => d.moral == "Buena").length;

    const villanos = stat.filter(d => d.moral == "Mala").length

    const DC = stat.filter(d => d.tipo == "DC").length


    const MARVEL = stat.filter(d => d.tipo == "Marvel").length


    top.sort((a, b) => b.nivelPoder - a.nivelPoder);

    const top3 = top.slice(0,3);
    return{
      conteo_gen: total,
      heroes: heroes,
      villanos: villanos,
      dc:DC ,
      mc: MARVEL,
      top: top3,
    }
  }

}
