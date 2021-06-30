import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { RestaurarPasswordComponentComponent } from './restaurar-password-component/restaurar-password-component.component';
import { RegistroUsuarioComponentComponent } from './registro-usuario-component/registro-usuario-component.component';
import { ProductoComponentComponent } from './producto-component/producto-component.component';
import { SesionComponentComponent } from './sesion-component/sesion-component.component'; 
const routes: Routes = [
 
];

@NgModule({
  declarations:[
    HeaderComponentComponent,
    RestaurarPasswordComponentComponent,
    RegistroUsuarioComponentComponent,
    ProductoComponentComponent,
    SesionComponentComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}