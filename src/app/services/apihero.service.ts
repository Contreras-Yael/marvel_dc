import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiheroService {

  constructor() { }

  private http = inject(HttpClient);

  private url_sup = 'http://localhost:3977/api/heroes/general';

 sups_list():Observable<any[]>{
  return this.http.get<any[]>(this.url_sup)

 }

}
