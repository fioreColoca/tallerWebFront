import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoCarrito } from 'src/app/Models/ProductoCarrito';
import { OrderService } from 'src/app/Service/order.service';
import { UsuarioService } from 'src/app/Service/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito: ProductoCarrito[]
  total: number;


  constructor(private _orderService: OrderService, private router: Router, private _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      this._usuarioService.validate(token).subscribe(data => {
        const { ok } = data;
        if (!ok) {
          Swal.fire("Error", "Usuario no logueado.", "error").then(() => {
            this.router.navigate(["Home"])
          })
        }
      }, error => {
        Swal.fire("Error", "Usuario no logueado.", "error").then(() => {
          this.router.navigate(["Home"])
        })
      })
    } else {
      Swal.fire("Error", "Usuario no logueado.", "error").then(() => {
        this.router.navigate(["Home"])
      })
    }

    this.carrito = JSON.parse(sessionStorage.getItem("carrito"));
    this.total = this.calcularTotal();

  }

  calcularTotal() {
    let result = 0;
    if (this.carrito) {
      this.carrito.forEach((item) => result += (item.price * item.cantidad))
    }
    return result;
  }

  crearOrden() {
    if (this.carrito.length > 0) {
      this._orderService.createOrder(this.carrito).subscribe(data => {
        Swal.fire("Exito!", "Orden realizada correctamente.", "success").then(() => {
          this.limpiarCarrito();
          this.router.navigate(["Home"])
        });
      }, error => {
        console.log(error);
        Swal.fire("Error", "Error al crear la orden.", "error");
      });

    } else {
      Swal.fire("Error", "No hay productos en el carrito.", "error");
    }

  }

  limpiarCarrito() {
    sessionStorage.removeItem("carrito");
    this.carrito = [];
    this.total = 0;
  }
}
