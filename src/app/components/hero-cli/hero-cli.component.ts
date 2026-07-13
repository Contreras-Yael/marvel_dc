import { Component, OnInit, inject } from '@angular/core';
import { Client_m_service } from '../../services/client-m.service';
import { HeroCardComponent } from '../hero-card-component/hero-card-component.component';

@Component({
  selector: 'app-hero-cli',
  imports: [HeroCardComponent],
  templateUrl: './hero-cli.component.html',
  styleUrl: './hero-cli.component.css'
})
export class HeroCliComponent implements OnInit{


  private list_cli = inject(Client_m_service);

  public arr_cli : any[] = [];


  ngOnInit(): void {
    this.carga();
  }

  carga(){
    this.list_cli.list_cli().subscribe({

      next:(data)=>{
        this.arr_cli = data;
        console.log('Pues cargo el mongo cliente', this.arr_cli)
      },
      error:(error) => {
        console.error('Error al cargar los héroes:', error);
      }

    });
  }


}
