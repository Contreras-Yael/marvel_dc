import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'Search-bar',
  imports: [],
  templateUrl: './search-bar-component.component.html',
  styleUrl: './search-bar-component.component.css'
})

export class SearchBarComponent {

  @Output() busqueda = new EventEmitter<any>();

  public texto = '';
  public editorial = 'Todos';
  public moral = 'Todos';

  text_bus(event: any) {
  this.texto = event.target.value;
  this.filtro();
  }

  tad_edi(event: any) {
  this.editorial = event.target.value;
  this.filtro();
  }

  tag_mor(event: any) {
  this.moral = event.target.value;
  this.filtro();
  }

  filtro() {
  this.busqueda.emit({
  texto: this.texto,
  editorial: this.editorial,
  moral: this.moral
  });
  }

  buscardato(event:any){
    const texto = event.target.value;
    this.busqueda.emit(texto);

    console.log(this.busqueda);
  }
}
