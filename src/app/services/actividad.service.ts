import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actividad } from '../models/actividad';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor(private http : HttpClient) { }

  getActividades(): Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({

      })
    }
    return this.http.get('http://localhost:3000/api//actividad/', httpOption);
  }

  postActividad(actividad: Actividad): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
  }
  return this.http.post('http://localhost:3000/api/actividad/', actividad, httpOption);
}


getActividadById(idSocio: string): Observable<any> {
  let httpOption = {
    headers: new HttpHeaders({

    })
  }
  return this.http.get('http://localhost:3000/api/socio/'+ idSocio, httpOption);
}

deleteActividad(idActividad: string): Observable<any> {
  let httpOption = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
}
return this.http.delete('http://localhost:3000/api/actividad/'+idActividad, httpOption);
}

}
