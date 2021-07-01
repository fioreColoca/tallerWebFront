import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { RegistroUsuarioComponent } from './Components/registro-usuario/registro-usuario.component';
import { ProductoComponent } from './Components/producto/producto.component';
import { SesionUsuarioComponent } from './Components/sesion-usuario/sesion-usuario.component';
import { HomeComponent } from './Components/home/home.component';
import { CarritoComponent } from './Components/carrito/carrito.component';
import { ErrorComponent } from './Components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistroUsuarioComponent,
    ProductoComponent,
    SesionUsuarioComponent,
    HomeComponent,
    CarritoComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
