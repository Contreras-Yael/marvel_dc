import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Client_m_service {

  constructor() { }

  private http = inject(HttpClient);

  private url = 'http://localhost:3000/api/test'

  private consig = signal<any[]>([]);

  lecto = this.consig.asReadonly();

  list_cli(): Observable<any[]>{
    return this.http.get<any[]>(this.url)
  }

}
