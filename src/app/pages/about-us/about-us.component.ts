import { Component } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'about-us-page',
  imports: [ReactiveFormsModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  formulario = new FormGroup({
    Nombre: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    Alias: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    Correo : new FormControl('',[
      Validators.required,
      Validators.email,
    ]),
    Poder: new FormControl('',[
      Validators.required,
      Validators.min(1),
      Validators.max(100),
    ]),
    Editorial: new FormControl('',[
      Validators.required,
    ]),
  });

  onSumbit(){
    if(this.formulario.valid){
      console.info("Formulario se envio: ", this.formulario.value);
    }else{
      console.warn("Formulario no valido!!");
    }
  }

}
