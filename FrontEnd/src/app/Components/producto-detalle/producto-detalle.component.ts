import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/Models/Producto';
import { ProductoService } from 'src/app/Service/producto.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  id:string
  producto:Producto
  productoForm: FormGroup;


  constructor(private aRouter:ActivatedRoute,private _productoService : ProductoService,private router:Router,private fb: FormBuilder) { 
    this.id=this.aRouter.snapshot.paramMap.get('id');
    this.productoForm = this.fb.group({
      cantidad: ['1']
     
    });
  }

  ngOnInit(): void {
   this.obtenerProducto();
  }
  
  obtenerProducto(){
    this._productoService.getProduct(this.id).subscribe(data => {
      this.producto=data.item;

      if(this.producto.id==undefined) this.router.navigate(["Error"])
    }, error =>{
      this.router.navigate(["Error"])
    })
  }

  agregarAlCarrito(){

  }

}
