import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudVueloService {

  private baseUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) { }

  create(svuelo: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}` + `/create`, svuelo);
  }

  update(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  getList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+ `/s_vuelo`);
  }

}
