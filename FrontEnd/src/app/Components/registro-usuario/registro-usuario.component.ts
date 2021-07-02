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
      nombre: ['',Validators.required, Validators.maxLength(50)],
      apellido: ['',Validators.required, Validators.maxLength(50)],
      email: ['',Validators.required, Validators.email],
      contrasenia: ['',Validators.required, Validators.minLength(8), Validators.pattern('^[a-zA-Z0-9!@#$%^&*()]+$'),Validators.maxLength(50)],
      direccion:['', Validators.required],
    });
  }
  
  ngOnInit(): void {
  }

  agregarUsuario(){
    console.log(this.usuarioForm)
  }

}
