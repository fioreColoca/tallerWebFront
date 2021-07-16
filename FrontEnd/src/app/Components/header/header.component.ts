import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Service/usuario.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  isLogueado(){
    return this._usuarioService.isLogin();
  }

  cerrarSesion(){
    this._usuarioService.cerrarSesion();
  }

  
}
