import { Component, Input } from '@angular/core';
import { HeroCardComponent } from "../hero-card-component/hero-card-component.component";

@Component({
  selector: 'teamhero',
  imports: [HeroCardComponent],
  templateUrl: './team-builder-component.component.html',
  styleUrl: './team-builder-component.component.css'
})
export class TeamBuilderComponent {
  @Input() favlist: any[] = [];
  @Input() teamlist: any[]=[];


}
