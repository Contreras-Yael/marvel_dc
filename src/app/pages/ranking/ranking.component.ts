import { Component, inject } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
@Component({
  selector: 'ranking-page',
  imports: [],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.css'
})
export class RankingComponent {

public historial = inject(LocalStorageService);

}
