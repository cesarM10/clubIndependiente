import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socio } from '../models/socio';

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  constructor(private http: HttpClient) { }


  getSocios(): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({

      })
  }
  return this.http.get('http://localhost:3000/api/socio', httpOption);
  }
  postSocio(socio: Socio): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
  }
  return this.http.post('http://localhost:3000/api/socio/', socio, httpOption);
}

getSocioByDni(dniSocio: string): Observable<any> {
  let httpOption = {
    headers: new HttpHeaders({

    })
  }
  return this.http.get('http://localhost:3000/api/socio/'+ dniSocio, httpOption);
}

deleteSocio(idSocio: string): Observable<any> {
  let httpOption = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
}
return this.http.delete('http://localhost:3000/api/socio/'+idSocio,httpOption);
}



}
