import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoCarrito } from '../Models/ProductoCarrito';

@Injectable({
    providedIn: 'root'
  })

  export class OrderService{
    constructor(private http: HttpClient) { }

    url = 'http://localhost:4000/api/order/';

    createOrder(order:ProductoCarrito[]): Observable<any> {
        const headers = { 'content-type': 'application/json'} 
        return this.http.post(this.url+"new",JSON.stringify(order),{'headers':headers});
        
      }
  }