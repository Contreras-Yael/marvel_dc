import { Component, Input } from '@angular/core';

@Component({
  selector: 'teamhero',
  imports: [],
  templateUrl: './team-builder-component.component.html',
  styleUrl: './team-builder-component.component.css'
})
export class TeamBuilderComponent {
  @Input() favlist: any[] = [];
  @Input() teamlist: any[]=[];


}
