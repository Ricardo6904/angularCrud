import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../modelos/empleado';
import { EmpleadoService } from '../../servicio/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  empleado:Empleado= new Empleado();
  datatable:any = [];
  constructor(private empleadoService:EmpleadoService) { }

  ngOnInit(): void {
    this.cargarTabla();
  }
  cargarTabla(){
    this.empleadoService.getEmpleados().subscribe(res => {
      this.datatable = res;
      console.log(res);
    });
  }
  nuevoEmpleado(empleado:Empleado):void{
    this.empleadoService.addEmpleado(empleado).subscribe(res => {
      if(res){
        alert(`El cliente ${empleado.Nombre} se ha registrado con exito!`);
        this.limpiar();
        this. cargarTabla();
      } else {
        alert('Error! :(')
      }
    });
  }
  actualizarEmpleado(empleado:Empleado):void{
    this.empleadoService.updateEmpleado(empleado.IDEmpleado, empleado).subscribe(res => {
      if(res){
        alert('Error! :(')
      } else {
        alert(`El cliente número ${empleado.IDEmpleado} se ha modificado con exito!`);
        this.limpiar();
        this.cargarTabla();
      }
    });
  }

  eliminarEmpleado(id:number):void{
    this.empleadoService.deleteEmpleado(id).subscribe(res => {
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
    this.empleado.IDEmpleado = select.IDEmpleado;
    this.empleado.IDRol = select.IDRol;
    this.empleado.Nombre = select.Nombre;
    this.empleado.Apellido = select.Apellido;
    this.empleado.Cedula = select.Cedula;
    this.empleado.Direccion = select.Direccion;
    this.empleado.Telefono = select.Telefono;
    this.empleado.Genero = select.Genero;
  }
  limpiar(){
    this.empleado.IDEmpleado =0;
    this.empleado.IDRol =0;
    this.empleado.Nombre = "";
    this.empleado.Apellido = "";
    this.empleado.Cedula = "";
    this.empleado.Direccion ="";
    this.empleado.Telefono="";
    this.empleado.Genero=""
  }

}
