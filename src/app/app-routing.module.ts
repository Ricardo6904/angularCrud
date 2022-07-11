import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './paginas/cliente/cliente.component';
import { DetalleVentaComponent } from './paginas/detalle-venta/detalle-venta.component';
import { EmpleadoComponent } from './paginas/empleado/empleado.component';
import { VentasComponent } from './paginas/ventas/ventas.component';

const routes: Routes = [
  { path: 'empleado', component: EmpleadoComponent },
  { path: '', component: ClienteComponent },
  {path:'ventas', component:VentasComponent},
  {path:'venta-detalle', component:DetalleVentaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
