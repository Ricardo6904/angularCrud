import { Component, OnInit } from '@angular/core';
import { Venta } from '../../modelos/venta';
import { VentasService } from '../../servicio/ventas.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
  providers: [DatePipe]
})
export class VentasComponent implements OnInit {
  fecha:any;
  venta:Venta= new Venta();
  datatable:any = [];
  constructor(private ventasService:VentasService,private datePipe: DatePipe) { 
    this.fecha = this.datePipe.transform(this.fecha, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.cargarTabla();
  }

  
  

  cargarTabla(){
    this.ventasService.getVentas().subscribe(res => {
      this.datatable = res;
      console.log(res);
    });
  }
  nuevo(venta:Venta):void{
    this.ventasService.addVenta(venta).subscribe(res => {
      if(res){
        alert(`La venta ${venta.IDVenta} se ha registrado con exito!`);
        this.limpiar();
        this. cargarTabla();
      } else {
        alert('Error! :(')
      }
    });
  }
  actualizar(venta:Venta):void{
    this.ventasService.updateVenta(venta.IDVenta, venta).subscribe(res => {
      if(res){
        alert('Error! :(')
      } else {
        alert(`La venta ${venta.IDVenta} se ha modificado con exito!`);
        this.limpiar();
        this.cargarTabla();
      }
    });
  }

  eliminar(id:number):void{
    this.ventasService.deleteVenta(id).subscribe(res => {
      if(res){
        alert(`El cliente número ${id} se ha eliminado con exito!`);
        this.limpiar();
        this.cargarTabla();
      } else {
        alert('Error! :(')
      }
    });
  }
  establecerData(select:any){
    this.venta.IDVenta = select.IDVenta;
    this.venta.IDCliente = select.IDCliente;
    this.venta.IDEmpleado = select.IDEmpleado;
    this.venta.Fecha = select.Fecha;
    this.venta.Iva = select.Iva;
    this.venta.Subtotal = select.Subtotal;
    this.venta.Total = select.Total;
  }
  limpiar(){
    this.venta.IDVenta = 0;
    this.venta.IDCliente = 0;
    this.venta.IDEmpleado = "";
    this.venta.Fecha.getDate();
    this.venta.Iva = 0;
    this.venta.Subtotal = 0;
    this.venta.Total = 0;
  }

}
