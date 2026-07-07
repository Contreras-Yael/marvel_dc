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


    onSubmit() {

    const endpo = environment.endpoints.saveHero;

    if (this.formulario.invalid) return;

    console.info("connectando", this.formulario.value);

    this.lineservice.posthero(endpo, this.formulario.value).subscribe({
      next: (respuesta) => {
        alert('funco');
        this.formulario.reset({ Editorial: 'Todos' });
      },
      error: (err) => {
        console.error('no funco', err);
        alert('no funco');
      }
    });
  }

}
