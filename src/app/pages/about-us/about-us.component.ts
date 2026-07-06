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
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    Alias: new FormControl('',[
  //    Validators.required,
      Validators.minLength(3),
    ]),
    Correo : new FormControl('',[
//      Validators.required,
      Validators.email,
    ]),
    Poder: new FormControl('',[
      //Validators.required,
      Validators.min(1),
      Validators.max(100),
    ]),
    Editorial: new FormControl('',[
      //Validators.required,
    ]),
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
