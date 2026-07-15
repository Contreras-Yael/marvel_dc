import { Component, inject, input, OnInit } from '@angular/core';
import { ApiheroService } from '../../services/apihero.service';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'detalle-her-page',
  standalone:true,
  imports: [KeyValuePipe],
  templateUrl: './detalle-her.component.html',
  styleUrl: './detalle-her.component.scss'
})
export class DetalleHerComponent implements OnInit{

  private api = inject(ApiheroService);
  public seleonher: any = null;

  id = input.required<string>();

  ngOnInit(): void {
  const hereoinf = this.id();

    if (hereoinf) {
      console.log('id del heroe:',hereoinf)
        this.api.sups_ind(hereoinf).subscribe({
        next: (listaDeApi) => {
          this.seleonher = listaDeApi;
        },
        error:(err) => {
          console.log('Error con extraccion');
        }
      });
    }
}

}
