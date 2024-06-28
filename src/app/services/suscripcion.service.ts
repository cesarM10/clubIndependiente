import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Suscripcion } from '../models/suscripcion';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {

  constructor(private http: HttpClient) { }

  getSuscripciones(dniSocio: string): Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({

      })
    }
    
    return this.http.get('http://localhost:3000/api/suscripcion/dniSocio/'+dniSocio, httpOption);
  }

  createSuscripcion(suscripcion: Suscripcion): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post('http://localhost:3000/api/suscripcion/', suscripcion, httpOption);
  }

  deleteSuscripcion(idSuscripcion: string): Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.delete('http://localhost:3000/api/suscripcion/' + idSuscripcion, httpOption);
  }
}
