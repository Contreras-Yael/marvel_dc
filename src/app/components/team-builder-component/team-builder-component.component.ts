import { Component, Input, inject } from '@angular/core';
import { HeroCardComponent } from "../hero-card-component/hero-card-component.component";
import { LocalStorageService } from '../../services/local-storage.service';
// import { ApiheroService } from '../../services/apihero.service';

@Component({
  selector: 'teamhero',
  imports: [HeroCardComponent],
  templateUrl: './team-builder-component.component.html',
  styleUrl: './team-builder-component.component.css'
})
export class TeamBuilderComponent {
  // private listhero  = inject(ApiheroService);

  public historialbusc = inject(LocalStorageService);


  @Input() favlist: any[] = [];
  @Input() teamlist: any[]=[];


  public busqued: any[] = [];
  public tbusc: number = 0;


}
