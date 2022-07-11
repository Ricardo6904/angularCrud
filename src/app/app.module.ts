import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ClienteComponent } from './paginas/cliente/cliente.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoComponent } from './paginas/empleado/empleado.component';
import { VentasComponent } from './paginas/ventas/ventas.component';
import { DetalleVentaComponent } from './paginas/detalle-venta/detalle-venta.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    EmpleadoComponent,
    VentasComponent,
    DetalleVentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
