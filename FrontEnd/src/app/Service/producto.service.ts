import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost:4000/api/product/';

  constructor(private http: HttpClient) { }

    getProduct(): Observable<any> {
      const data= this.http.get(this.url);
      return data;
    }
  }

