import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Models/Usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:4000/api/user/';

  logueado: boolean = false;
  constructor(private http: HttpClient) { }

    createUser(user:Usuario): Observable<any> {
      const headers = { 'content-type': 'application/json'} 
      return this.http.post(this.url+"signup",JSON.stringify(user),{'headers':headers});
      
    }

    login(email:string,password:string):Observable<any>{
      const headers = { 'content-type': 'application/json'} 
      return this.http.post(this.url+"signin",JSON.stringify({email:email,password:password}),{'headers':headers});
    }

    isLogin(){
      if(sessionStorage.getItem("accessToken")){
        this.logueado = true;
      }      
      return this.logueado;
    }

    cerrarSesion(){
      sessionStorage.removeItem("accessToken");
      return this.logueado = false;
    }

    validate(accessToken:string):Observable<any>{
      const headers = { 'content-type': 'application/json','x-accessToken':accessToken} 
      return this.http.get(this.url+"validate",{'headers':headers},);
    }
  }

