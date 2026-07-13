import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient, ) {   }

    public posthero = (url: string, body: any): Observable<any> => {
    return this.http.post(`${environment.urlbase}${url}`, body);
  };
    // aca se usa la url de base en este caso la creada en environment y la url extre, siendo las funciones de post entre otros,
                                            // aca solo se necesitaria revisar esta estructura pero ya tienes la idea general
    public gethero = (url: string): Observable<any> => {
    return this.http.get(`${environment.urlbase}${url}`);
  };

  public gethero = (url: string): Observable<any> => {
    return this.http.get(`${environment.urlbase}${url}`);
  };


    public deletehero = (url:string): Observable<any> =>
    this.http.delete(`${environment.urlbase}${url}`);

    public updatehero = (url: string, body: any): Observable<any> => {
    return this.http.put(`${environment.urlbase}${url}`, body);
  };

}
//  public postN = (url: string, body: any, contentType?: string): Observable<any> => this.http.post(`${environment.apiUrl}${url}`, body);
//  public delete = (url: string, contentType?: string): Observable<any> => this.http.delete(`${environment.apiUrl}${url}`, contentType ? { headers: { "Content-Type": contentType } } : {});
//  public post = (url: string, body: any, contentType?: string): Observable<any> => this.http.post(`${environment.apiUrl}${url}`, body, contentType ? { headers: { "Content-Type": contentType } } : {});

//  public get = (url: string, contentType?: string): Observable<any> => this.http.get(`${environment.apiUrl}${url}`, contentType ? { headers: { "Content-Type": contentType } } : {});
