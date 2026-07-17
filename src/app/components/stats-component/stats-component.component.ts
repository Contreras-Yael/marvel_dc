import { Component, inject} from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';


@Component({
  selector: 'stats-co',
  imports: [],
  templateUrl: './stats-component.component.html',
  styleUrl: './stats-component.component.css',
})
export class StatsComponent {


  public historial = inject(LocalStorageService);


}
