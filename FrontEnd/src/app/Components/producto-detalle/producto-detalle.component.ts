import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/Models/Producto';
import { ProductoService } from 'src/app/Service/producto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  id:string
  producto:Producto

  constructor(private aRouter:ActivatedRoute,private _productoService : ProductoService,private router:Router) { 
    this.id=this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
   this.obtenerProducto();
  }
  
  obtenerProducto(){
    this._productoService.getProduct(this.id).subscribe(data => {
      this.producto=data.item;

      if(this.producto.id==undefined) this.router.navigate(["Error"])
    }, error =>{
      console.log(error);
    })
  }

}
