import { Producto } from './../../Models/Producto';
import { ProductoService } from './../../Service/producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  
  listarProductos: Producto[]=[];
  constructor(private _productoService : ProductoService) { }

  ngOnInit(): void {
  }

  obtenerProductos(){
    this._productoService.getProduct().subscribe(data => {
      console.log(data);
      this.listarProductos = data;
    }, error =>{
      console.log(error);
    })
  }
}