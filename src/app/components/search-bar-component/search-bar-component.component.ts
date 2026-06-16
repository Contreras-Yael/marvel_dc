import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'Search-bar',
  imports: [],
  templateUrl: './search-bar-component.component.html',
  styleUrl: './search-bar-component.component.css'
})

export class SearchBarComponent {

  @Input() carta: any;
  @Output() busqueda = new EventEmitter<String>();

  public search: string = '';

  buscardato(event:any){
    const data = event.target.value();
    this.busqueda.emit(data);
  }

  //   filterEmployees(): void {
  //   if (!this.search || this.search.trim() === '') {
  //      this.busqueda.emit(this.search)
  //     this.carta = this.buscardato;
  //     return;
  //   }
  //   const term = this.search.toLowerCase().trim();
  //   const filtered = this.carta.filter(emp =>
  //   (emp.name && emp.name.toLowerCase().includes(term))
  // );
  //   this.carta = filtered;
  // }


}
