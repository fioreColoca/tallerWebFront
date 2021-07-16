import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/Models/Producto';
import { ProductoService } from 'src/app/Service/producto.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductoCarrito } from 'src/app/Models/ProductoCarrito';
import { UsuarioService } from 'src/app/Service/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  id: string
  producto: Producto
  productoForm: FormGroup;


  constructor(private aRouter: ActivatedRoute, private _productoService: ProductoService, private router: Router, private fb: FormBuilder, private _usuarioService: UsuarioService) {
    this.id = this.aRouter.snapshot.paramMap.get('id');
    this.productoForm = this.fb.group({
      cantidad: ['1']

    });
  }

  ngOnInit(): void {
    this.obtenerProducto();
  }

  obtenerProducto() {
    this._productoService.getProduct(this.id).subscribe(data => {
      this.producto = data.item;

      if (this.producto.id == undefined) this.router.navigate(["Error"])
    }, error => {
      this.router.navigate(["Error"])
    })
  }

  agregarAlCarrito() {
    const token = sessionStorage.getItem("accessToken");
    this._usuarioService.validate(token).subscribe(data => {
      const { ok } = data;
      if (ok) {
        const productoCarrito = new ProductoCarrito(this.producto, this.productoForm.value.cantidad);
        const carrito = JSON.parse(sessionStorage.getItem("carrito"));
        if (carrito) {
          const nuevoCarrito = [...carrito, productoCarrito]
          sessionStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
        } else {
          const nuevoCarrito = [productoCarrito]
          sessionStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
        }
        Swal.fire("Carrito", "Producto agregado al carrito ¿desea confirmar la compra?.", "info").then(() => {
          this.router.navigate(["Carrito"])
        })
      } else {
        Swal.fire("Error", "Debe iniciar sesion para agregar productos al carrito.", "error").then(() => {
          this.router.navigate(["Signin"])
        })
      }
    }, error => {
      console.log(error);
      Swal.fire("Error", "Debe iniciar sesion para agregar productos al carrito.", "error").then(() => {
        this.router.navigate(["Signin"])
      })
    })

    
  }

}
