import { Component, inject } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { HeroCardComponent } from '../../components/hero-card-component/hero-card-component.component';
@Component({
  selector: 'ranking-page',
  imports: [HeroCardComponent],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.css'
})
export class RankingComponent {

public historial = inject(LocalStorageService);

}
