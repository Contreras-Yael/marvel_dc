import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { ApiheroService } from '../../services/apihero.service';
import { HeroCardComponent } from '../hero-card-component/hero-card-component.component';
import { SearchBarComponent } from '../search-bar-component/search-bar-component.component';
import { TeamBuilderComponent } from '../team-builder-component/team-builder-component.component';
import { StatsComponent } from '../stats-component/stats-component.component';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'List-hero',
  imports: [HeroCardComponent, SearchBarComponent, TeamBuilderComponent, StatsComponent],
  templateUrl: './hero-list-component.component.html',
  styleUrl: './hero-list-component.component.css'
})

export class HeroListComponent implements OnInit {

private listhero  = inject(ApiheroService);
public heroService : any[] = [];
public historialbusc = inject(LocalStorageService);

  ngOnInit(): void {
    this.cargahero();
  }


cargahero(){
  this.listhero.sups_list().subscribe({
    next:(data) => {
      this.historialbusc.cargarheroe(data);
      this.heroService = data;
      console.log('Cargado o eso parece', this.heroService);
    },
    error:(error) => {
      console.error('Error al cargar los héroes:', error);
    }
  });
}
}