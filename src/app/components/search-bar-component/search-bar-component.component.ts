import { Component, effect, inject, signal } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'Search-bar',
  imports: [],
  templateUrl: './search-bar-component.component.html',
  styleUrl: './search-bar-component.component.css'
})
export class SearchBarComponent {

  constructor(){
  effect(()=>{console.log(`Funciona el filto?`,this.vigifilt());
     this.historial.filtrosap(this.vigifilt());
  })
}
  public texto = '';
  public editorial = 'Todos';
  public moral = 'Todos';

  public historial = inject(LocalStorageService);

  text_bus(event: Event) {
    this.texto = (event.target as HTMLInputElement).value;
    this.filtro();

    const valor = (event.target as HTMLSelectElement).value;
    this.vigifilt.update(f => ({ ...f, texto: valor }));
  }

  tad_edi(event: Event) {
    this.editorial = (event.target as HTMLSelectElement).value;
    this.filtro();
  }

  tag_mor(event: Event) {
    this.moral = (event.target as HTMLSelectElement).value;
    this.filtro();

  }

  public vigifilt = signal({
      texto: '',
      editorial:  'Todos',
      moral: 'Todos',
  });

  filtro() {
    this.historial.filtrosap({
      texto: this.texto,
      editorial: this.editorial,
      moral: this.moral
    });
  }

  registrarbusq() {
    if (!this.texto.trim()) {
      return;
    }

    this.historial.buscregistro(this.texto);
  }
}
