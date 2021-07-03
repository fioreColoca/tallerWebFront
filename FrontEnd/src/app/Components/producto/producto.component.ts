import { Producto } from './../../Models/Producto';
import { ProductoService } from './../../Service/producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  
  listaProductos: Producto[]=[];
  constructor(private _productoService : ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this._productoService.getProducts().subscribe(data => {
  
      this.listaProductos = data.items;

    }, error =>{
      console.log(error);
    })
  }
}