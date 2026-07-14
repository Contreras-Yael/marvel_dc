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



    // if (heroeId) {
    //   console.log('🚀 Optimizando carga. Pidiendo solo el ID:', heroeId);

    //   // 🔥 LLAMADA OPTIMIZADA: Trae directo un solo objeto de milisegundos
    //   this.api.obtenerUnSoloHeroe(heroeId).subscribe({
    //     next: (heroeEncontrado) => {
    //       this.seleonher = heroeEncontrado;
    //       console.log('✅ Personaje único cargado al instante:', this.seleonher);
    //     },
    //     error: (err) => {
    //       console.error('Error al traer el detalle del héroe:', err);
    //     }
    //   });
    // }
