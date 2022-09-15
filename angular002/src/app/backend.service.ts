import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BackendService {
  sistemaUrl: string = 'http://localhost:8080/sistema';
  constructor(private http: HttpClient) {}

  login(credenciais: any): Observable<any> {
    return this.http.post<any>(this.sistemaUrl + '/login', credenciais);
  }
  register(credenciais: any): Observable<any> {
    return this.http.post<any>(this.sistemaUrl + '/register', credenciais);
  }
}
