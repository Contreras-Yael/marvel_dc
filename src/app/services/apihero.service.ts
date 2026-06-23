import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiheroService {

  constructor() { }

  private http = inject(HttpClient);

  private urlbase = "https://superheroapi.com/api/";
  private key = "2f648a02029473f5456a17a6cf18f0fb";


  public iteraciom = (characterid: number): Promise<any> => {
    const data = `${this.urlbase}/${characterid}`;

    return firstValueFrom(this.http.get<any>(data));
  }


}
