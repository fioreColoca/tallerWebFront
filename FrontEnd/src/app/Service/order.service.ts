import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoCarrito } from '../Models/ProductoCarrito';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  constructor(private http: HttpClient) { }

  url = 'http://localhost:4000/api/order/';

  createOrder(order: ProductoCarrito[]): Observable<any> {
    const token = sessionStorage.getItem('accessToken');
    const headers = { 'content-type': 'application/json', 'x-accessToken': token }
    return this.http.post(this.url + "new", JSON.stringify(order), { 'headers': headers });

  }
}