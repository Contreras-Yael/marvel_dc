import { Component, inject, OnInit } from '@angular/core';
import { ApiheroService } from '../../services/apihero.service';

@Component({
  selector: 'ranking-page',
  imports: [],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.css'
})
export class RankingComponent implements OnInit {

  private api = inject(ApiheroService);
  public heroservice : any[] =[];
  public top: any[] =[];

  ngOnInit(): void {

  }

  top_heroe(){
    this.api.sups_list().subscribe({
      next:(data)=>{
      this.heroservice = data;
      console.log('Cargado o eso parece', this.heroservice);
      },
    })
  }


}
