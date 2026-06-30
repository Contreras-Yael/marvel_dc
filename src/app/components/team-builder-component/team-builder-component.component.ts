import { Component, Input, inject } from '@angular/core';
import { HeroCardComponent } from "../hero-card-component/hero-card-component.component";
// import { ApiheroService } from '../../services/apihero.service';

@Component({
  selector: 'teamhero',
  imports: [HeroCardComponent],
  templateUrl: './team-builder-component.component.html',
  styleUrl: './team-builder-component.component.css'
})
export class TeamBuilderComponent {
  // private listhero  = inject(ApiheroService);

  @Input() favlist: any[] = [];
  @Input() teamlist: any[]=[];


  public busqued: any[] = [];
  public tbusc: number = 0;


}
