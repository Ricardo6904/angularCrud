import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../modelos/cliente';
import { ClientesService } from '../../servicio/clientes.service';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  cliente:Cliente= new Cliente();
  datatable:any = [];
  constructor(private clientesService:ClientesService) { }

  ngOnInit(): void {
    this.cargarTabla();
  }
  cargarTabla(){
    this.clientesService.getClientes().subscribe(res => {
      this.datatable = res;
      console.log(res);
    });
  }
  nuevoCliente(cliente:Cliente):void{
    this.clientesService.addCliente(cliente).subscribe(res => {
      if(res){
        alert(`El cliente ${cliente.Nombre} se ha registrado con exito!`);
        this.limpiar();
        this. cargarTabla();
      } else {
        alert('Error! :(')
      }
    });
  }
  actualizarMascota(cliente:Cliente):void{
    this.clientesService.updateCliente(cliente.IDCliente, cliente).subscribe(res => {
      if(res){
        alert('Error! :(')
      } else {
        alert(`El cliente número ${cliente.IDCliente} se ha modificado con exito!`);
        this.limpiar();
        this.cargarTabla();
      }
    });
  }

  eliminarCliente(id:number):void{
    this.clientesService.deleteCliente(id).subscribe(res => {
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
    this.cliente.IDCliente = select.IDCliente;
    this.cliente.Nombre = select.Nombre;
    this.cliente.Apellido = select.Apellido;
    this.cliente.Cedula = select.Cedula;
    this.cliente.Direccion = select.Direccion;
    this.cliente.Telefono = select.Telefono;
    this.cliente.Genero = select.Genero;
  }
  limpiar(){
    this.cliente.IDCliente =0;
    this.cliente.Nombre = "";
    this.cliente.Apellido = "";
    this.cliente.Cedula = "";
    this.cliente.Direccion ="";
    this.cliente.Telefono="";
    this.cliente.Genero=""
  }
}
