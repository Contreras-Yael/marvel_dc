import { Component, Input, OnInit, inject } from '@angular/core';
import { HeroCardComponent } from '../../components/hero-card-component/hero-card-component.component';
import { environment } from '../../../environments/environment.development';
import { HttpServiceService } from '../../services/http-service.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Client_m_service } from '../../services/client-m.service';


@Component({
  selector: 'heroes-page',
  standalone: true,
  imports: [HeroCardComponent, ReactiveFormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit{


  public listaHeroes: any[] = [];

  public changs: any = null;

  public clien_li = inject(Client_m_service);
  public arrgo : any[] = [];

  constructor(public lineservice : HttpServiceService){}

    formulario = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
  });



  ngOnInit(): void {
    this.getherolist();
    this.cargaclien();
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


cargaclien(){
  this.clien_li.list_cli().subscribe({
    next:(data) =>{
      this.arrgo = data;
      console.log('Carga los elementos de client');
    },error:(error) =>{
      console.error('Error carga', error);
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

update() {
  if (this.formulario.invalid) {
    this.formulario.markAllAsTouched();
    return;
  }
  const enpo = environment.endpoints.updateHero;
  const datoscam = {
    id: this.changs._id,
    name: this.formulario.value.name
  };
  this.lineservice.updatehero(enpo, datoscam).subscribe({
    next: (respuesta: any) => {
      this.getherolist();
      this.changecard();
      console.log(datoscam);
    },
    error: (err) => {
      console.error('no funciono', err);
      console.log("llega id?", this.changs?._id);
      console.log(datoscam);
    }
  });
}

changecard(hero?: any) {
  if (hero) {
    this.changs = hero;
    this.formulario.patchValue({
      name: hero.name
    });
    return;
  }
  this.changs = null;
  this.formulario.reset();
}

}
