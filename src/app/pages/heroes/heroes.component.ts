import { Component, Input, OnInit } from '@angular/core';
import { HeroCardComponent } from '../../components/hero-card-component/hero-card-component.component';
import { environment } from '../../../environments/environment.development';
import { HttpServiceService } from '../../services/http-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'heroes-page',
  imports: [HeroCardComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit{


  public listaHeroes: any[] = [];

  public changs: boolean =false;

  constructor(public lineservice : HttpServiceService){}

    formulario = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
  });



  ngOnInit(): void {
    this.getherolist();
  }

getherolist(){
  const enpo = environment.endpoints.listHeroes;

  console.info("conexion a api");
  this.lineservice.gethero(enpo).subscribe({
    next:(respuesta)=>{
      this.listaHeroes = respuesta.herosav;
      console.log(this.listaHeroes)
    },
    error:(err)=>{
      console.error('no funciono', err);
    }
  });
}

borrar(idhero: string){
  const enpo = environment.endpoints.deleteHero + idhero;
  this.lineservice.deletehero(enpo).subscribe({
    next:(respuesta)=>{
      this.listaHeroes = respuesta.herosav;
       this.getherolist();
    },
    error:(err)=>{
      console.error('no funciono', err);
    }
  });
}

update(idhero: string, datos : any){
  const enpo = environment.endpoints.updateHero;
 const datoscam = {id: idhero, name: datos };
    this.lineservice.updatehero(enpo, datoscam).subscribe({
    next:(respuesta: any)=>{
       this.getherolist();
       console.log(datos)
    },
    error:(err)=>{
      console.error('no funciono', err);
       console.log("llega id? 1  ", idhero)

       console.log(datos)
    }
  });
}

changecard(){
  console.log("Se activo el card?");
  this.changs = !this.changs;
}

}
