import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class HeroService {

  public ListHero: any[] = [
    {
      id:1,
      resume:"Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.",
      nombre:"Iron Man",
      tipo:"",
      poder:"",
      nivelPoder:12,
      favoritos:false,
    },
    {
      id:2,
      nombre:"Batman",
      resume:"Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.",
      tipo:"",
      poder:"",
      nivelPoder:12,
      favoritos:false,
    },
    {
      id:3,
      resume:"Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.",
      nombre:"Wonder Woman",
      tipo:"",
      poder:"",
      nivelPoder:12,
      favoritos:false,
    },
    {
      id:4,
      resume:"Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.",
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
