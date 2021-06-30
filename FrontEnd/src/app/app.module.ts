import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AppComponent } from './app.component';
import { SesionComponentComponent } from './sesion-component/sesion-component.component';
import { RestaurarPasswordComponentComponent } from './restaurar-password-component/restaurar-password-component.component';
import { RegistroUsuarioComponentComponent } from './registro-usuario-component/registro-usuario-component.component';
import { ProductoComponentComponent } from './producto-component/producto-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SesionComponentComponent,
    RestaurarPasswordComponentComponent,
    RegistroUsuarioComponentComponent,
    ProductoComponentComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
