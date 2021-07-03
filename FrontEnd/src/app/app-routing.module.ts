import { ErrorComponent } from './Components/error/error.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './Components/carrito/carrito.component';
import { RegistroUsuarioComponent } from './Components/registro-usuario/registro-usuario.component';
import { ProductoDetalleComponent } from './Components/producto-detalle/producto-detalle.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Carrito', component: CarritoComponent },
  { path: 'Error', component: ErrorComponent },
  { path: 'Signup', component: RegistroUsuarioComponent },
  { path: 'Detalle/:id', component: ProductoDetalleComponent },
  { path: '**', redirectTo:'Error' , pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}