import { Component, OnInit } from '@angular/core';
import { VentaDetalle } from '../../modelos/detalle-venta';
import { VentaDetalleService } from '../../servicio/venta-detalle.service';

@Component({
  selector: 'app-detalle-venta',
  templateUrl: './detalle-venta.component.html',
  styleUrls: ['./detalle-venta.component.css']
})
export class DetalleVentaComponent implements OnInit {

  ventaDetalle:VentaDetalle= new VentaDetalle();
  datatable:any = [];
  constructor(private ventaDetalleService:VentaDetalleService) { 
    
  }

  ngOnInit(): void {
    this.cargarTabla();
    
  }
  cargarTabla(){
    this.ventaDetalleService.get().subscribe(res => {
      this.datatable = res;
      console.log(res);
    });
  }
  nuevo(ventaDetalle:VentaDetalle):void{
    this.ventaDetalleService.add(ventaDetalle).subscribe(res => {
      if(res){
        alert(`${ventaDetalle.IDVentaDetalle} se ha registrado con exito!`);
        this.limpiar();
        this. cargarTabla();
      } else {
        alert('Error! :(')
      }
    });
  }
  actualizar(ventaDetalle:VentaDetalle):void{
    this.ventaDetalleService.update(ventaDetalle.IDVentaDetalle, ventaDetalle).subscribe(res => {
      if(res){
        alert('Error! :(')
      } else {
        alert(`${this.ventaDetalle.IDVentaDetalle} se ha modificado con exito!`);
        this.limpiar();
        this.cargarTabla();
      }
    });
  }

  eliminar(id:number):void{
    this.ventaDetalleService.delete(id).subscribe(res => {
      if(res){
        alert(` ${id} se ha eliminado con exito!`);
        this.limpiar();
        this.cargarTabla();
      } else {
        alert('Error! :(')
      }
    });
  }
  establecerData(select:any){
    this.ventaDetalle.IDVentaDetalle = select.IDVentaDetalle;
    this.ventaDetalle.IDVenta = select.IDVenta;
    this.ventaDetalle.IDProducto = select.IDProducto;
    this.ventaDetalle.Cantidad = select.Cantidad;
    this.ventaDetalle.PrecioUnitario = select.PrecioUnitario;
    this.ventaDetalle.Subtotal = select.Subtotal;
  }
  limpiar(){
    this.ventaDetalle.IDVentaDetalle = 0;
    this.ventaDetalle.IDVenta = 0;
    this.ventaDetalle.IDProducto = 0;
    this.ventaDetalle.Cantidad=0;
    this.ventaDetalle.PrecioUnitario = 0;
    this.ventaDetalle.Subtotal = 0;
  }
}
