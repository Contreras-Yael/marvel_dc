import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient, ) {   }

  public posthero = (url: string, body: any, contenType?: string): Observable<any> => this.http.post(`${environment.urlbase}${url}`,body);
}
//  public postN = (url: string, body: any, contentType?: string): Observable<any> => this.http.post(`${environment.apiUrl}${url}`, body);
//  public delete = (url: string, contentType?: string): Observable<any> => this.http.delete(`${environment.apiUrl}${url}`, contentType ? { headers: { "Content-Type": contentType } } : {});

