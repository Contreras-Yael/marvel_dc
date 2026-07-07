import { NgIf, NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpServiceService } from '../../services/http-service.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'about-us-page',
  imports: [ReactiveFormsModule, NgIf, NgStyle],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  public image : File | null = null;

  constructor(
    public lineservice : HttpServiceService,
  ){
  }

private http = inject(HttpClient);

formulario = new FormGroup({
  name: new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]),

  powerstats: new FormGroup({
    intelligence: new FormControl(1, [
      Validators.min(1),
      Validators.max(100),
    ]),
    strength: new FormControl(1, [
      Validators.min(1),
      Validators.max(100),
    ]),
    speed: new FormControl(1, [
      Validators.min(1),
      Validators.max(100),
    ]),
    durability: new FormControl(1, [
      Validators.min(1),
      Validators.max(100),
    ]),
    power: new FormControl(1, [
      Validators.min(1),
      Validators.max(100),
    ]),
    combat: new FormControl(1, [
      Validators.min(1),
      Validators.max(100),
    ]),
  }),

  biography: new FormGroup({
    'full-name': new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    'alter-egos': new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    'place-of-birth': new FormControl(''),
    alignment: new FormControl(''),
  }),

  appearance: new FormGroup({
    gender: new FormControl(''),
    race: new FormControl(''),
    height: new FormControl(''),
    weight: new FormControl(''),
    'eye-color': new FormControl(''),
    'hair-color': new FormControl(''),
  }),

  work: new FormGroup({
    occupation: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    base: new FormControl(''),
  }),

  image: new FormGroup({
    url: new FormControl(''),
  }),
});


onFileSelected(event: any) {
  const archivoInput = event.target.files;
  if (archivoInput && archivoInput.length > 0) {
    this.image = archivoInput[0];
  }
}
    onSubmit() {
    const endpo = environment.endpoints.saveHero;
    if (this.formulario.invalid) return;

    console.info("connectando", this.formulario.value);

    this.lineservice.posthero(endpo, this.formulario.value).subscribe({
      next: (respuesta) => {
      const id = respuesta.herosav?._id || respuesta.hero?._id;

        if(this.image && id){
        const multimedia = new FormData();
        multimedia.append('file', this.image);

          const enpofot = `/heroes/upload/${id}`;

        this.lineservice.updatehero(enpofot, multimedia).subscribe({
          next: (resMultimedia) => {
            alert('se guardo la image');
            this.eraseform();
          },
          error: (errMulti) => {
            console.error('Fallo el guardado:', errMulti);
            alert('⚠ se creo pero fallo.');
          }
        });
        alert('Se guardo correctamente el personaje');
        }

      },
      error: (err) => {
        console.error('No se pudo subir el formulario', err);
        alert('No se logro subir el formulario');
      }
    });
  }

eraseform() {
  this.formulario.reset();
  this.image = null;
}



}
