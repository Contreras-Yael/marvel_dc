import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiheroService {

  constructor() { }

  private http = inject(HttpClient);

  private url_sup = 'http://localhost:3000/api/heroes-internet';

  private herosig = signal<any[]>([]);

  heroe = this.herosig.asReadonly();




 sups_list():Observable<any[]>{
  return this.http.get<any[]>(this.url_sup)
 }

sups_ind(id: string): Observable<any>{
return this.http.get(`https://www.superheroapi.com/api.php/2f648a02029473f5456a17a6cf18f0fb/${id}`);
//https://www.superheroapi.com/api.php/2f648a02029473f5456a17a6cf18f0fb
//http://localhost:3000/api/heroes-internet/${id}
}

 busc(){
    this.sups_list().subscribe({
      next: (data) => {
        this.herosig.set(data);

        console.log('Entro, se cargo', data);
      },
      error: (err) => console.error('No funciono el busc de la api:', err)
    });
  }


 }
