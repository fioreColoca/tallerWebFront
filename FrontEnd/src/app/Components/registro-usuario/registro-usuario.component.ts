import { Usuario } from './../../Models/Usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  constructor(private fb: FormBuilder) { 

    this.usuarioForm = this.fb.group({
      nombre: ['',[Validators.required]],
      apellido: ['',[Validators.required, Validators.maxLength(50)]],
      email: ['',[Validators.required,Validators.email]],
      contrasenia: ['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      direccion:['',[ Validators.required]],
    });
  }
  
  ngOnInit(): void {
  }

  agregarUsuario(){
    console.log(this.usuarioForm)
    /* no devuelve nada por consola. entonces no muetsra validacion*/
  }

}
