import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Models/Usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:4000/api/user/';

  constructor(private http: HttpClient) { }

    crateUser(user:Usuario): Observable<any> {
      const headers = { 'content-type': 'application/json'} 
      return this.http.post(this.url+"signin",JSON.stringify(user),{'headers':headers});
      
    }
  }

