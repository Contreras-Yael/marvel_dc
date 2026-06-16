import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class HeroService {

  public ListHero: any[] = [
    {
      id:1,
      nombre:"Iron Man",
      tipo:"",
      poder:"",
      nivelPoder:12,
      favoritos:false,
    },
    {
      id:2,
      nombre:"Batman",
      tipo:"",
      poder:"",
      nivelPoder:12,
      favoritos:false,
    },
    {
      id:3,
      nombre:"Wonder Woman",
      tipo:"",
      poder:"",
      nivelPoder:12,
      favoritos:false,
    },
    {
      id:4,
      nombre:"Superman",
      tipo:"",
      poder:"",
      nivelPoder:12,
      favoritos:false,
    },
  ]
  constructor() { }

  public obtenerPersonajes(){

  }


}


 // La Academia necesita un sistema para administrar héroes y villanos. Los instructores
// deben visualizar personajes, filtrarlos, marcarlos como favoritos, consultar estadísticas
// y organizar equipos.


// id, nombre,
// universo, tipo, poder, nivelPoder y favorito.
