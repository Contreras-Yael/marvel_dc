import { Component, inject } from '@angular/core';
import { ApiheroService } from '../../services/apihero.service';

@Component({
  selector: 'ranking-page',
  imports: [],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.css'
})
export class RankingComponent {

  private api = inject(ApiheroService);

  public top: any[] =[];



}
