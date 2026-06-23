import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'Search-bar',
  imports: [],
  templateUrl: './search-bar-component.component.html',
  styleUrl: './search-bar-component.component.css'
})

export class SearchBarComponent {

  @Output() busqueda = new EventEmitter<string>();

  @Input() hero: any[] = [];

  private listhero: any[] = [];

  constructor(){}

  ngOnInit(): void {
    this.hero = this.listhero;
  }

  text_bus(){

  }

  tad_edi(){

  }

  tag_mor(){

  }


  filtro_2(){


  }


  // filtrado(textoRecibido: string){
  //   if(!textoRecibido){
  //     this.hero = this.hero;
  //     return;

  //   }
  //   const txtopeq = textoRecibido.toLowerCase();
  //   this.listhero = this.heroo.filter(heroe =>
  //   ( heroe.nombre.toLowerCase().includes(txtopeq)||
  //     heroe.tipo.toLowerCase().includes(txtopeq)||
  //     heroe.moral.toLowerCase().includes(txtopeq) )
  //   )
  // }


  buscardato(event:any){
    const texto = event.target.value;
    this.busqueda.emit(texto);
  }
}
