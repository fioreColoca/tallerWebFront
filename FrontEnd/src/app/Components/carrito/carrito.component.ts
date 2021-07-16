import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoCarrito } from 'src/app/Models/ProductoCarrito';
import { OrderService } from 'src/app/Service/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito:ProductoCarrito[]
  total:number;


  constructor(private _orderService: OrderService,private router:Router) { }
  
  ngOnInit(): void {
    this.carrito=JSON.parse(sessionStorage.getItem("carrito"));
    this.total=this.calcularTotal();
  }

  calcularTotal(){
    let result=0;
    this.carrito.forEach((item)=>result+=(item.price*item.cantidad))
    return result;
  }

  crearOrden(){
    console.log("entre")
    if(this.carrito.length>0){
      this._orderService.createOrder(this.carrito).subscribe(data=>{
        Swal.fire("Exito!","Orden realiazada correctamente.","success").then(()=>{
          this.router.navigate(["Home"])
        });
      },error=>{
        Swal.fire("Error","Error al crear la orden.","error");
      });
     
    }else{
      Swal.fire("Error","No hay productos en el carrito.","error");
    }

  }
}
