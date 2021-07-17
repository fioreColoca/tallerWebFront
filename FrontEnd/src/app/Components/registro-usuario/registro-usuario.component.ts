import { Usuario } from './../../Models/Usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Service/usuario.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';  

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  constructor(private fb: FormBuilder,private _usuarioService: UsuarioService) { 

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
    const {nombre,apellido,email,contrasenia,direccion}=this.usuarioForm.value;
    const user = new Usuario(email,contrasenia,nombre,apellido,direccion);
    console.log(user);
    this._usuarioService.createUser(user).subscribe(data=>{
      const {ok,msg}=data;
      if(ok){
        Swal.fire("¡Hecho!","Usuario creado correctamente. Por favor confirme su email","success")
      }else{
        Swal.fire("Error","No se pudo crear correctamente. Por favor intente con otro email","error")
      }
    });
  }

}
