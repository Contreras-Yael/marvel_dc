import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'Search-bar',
  imports: [],
  templateUrl: './search-bar-component.component.html',
  styleUrl: './search-bar-component.component.css'
})

export class SearchBarComponent {

  @Output() busqueda = new EventEmitter<string>();


  buscardato(event:any){
    const texto = event.target.value;
    this.busqueda.emit(texto);
  }
}
