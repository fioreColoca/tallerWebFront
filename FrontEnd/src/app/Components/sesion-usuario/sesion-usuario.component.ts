import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Service/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sesion-usuario',
  templateUrl: './sesion-usuario.component.html',
  styleUrls: ['./sesion-usuario.component.css']
})
export class SesionUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  constructor(private fb: FormBuilder,private _usuarioService: UsuarioService,private router:Router) { 
    this.usuarioForm = this.fb.group({
      email:[''],
      password: ['']
    });
  }

  ngOnInit(): void {
  }

  login(){
    const {email,password}=this.usuarioForm.value;
    this._usuarioService.login(email,password).subscribe(data=>{
      const {ok,msg,accessToken,idToken,refreshToken}=data;
      if(ok){
        sessionStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('idToken', idToken);
        sessionStorage.setItem('refreshToken', refreshToken);
        Swal.fire("Login","Bienvenido.","success").then(()=>{
          this.router.navigate(["Home"])
        });
      
        
      }else{
        Swal.fire("Login",msg,"error");
      }
      
    },error=>{
      const {ok,msg}=error.error;
      Swal.fire("Login",msg,"error");
    });
  }
}
