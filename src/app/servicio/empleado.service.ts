import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Empleado } from '../modelos/empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http:HttpClient) { }

  url:string = "http://localhost:57191";

  getEmpleados(){
    return this.http.get(this.url+'/api/Empleadoes');
  }

  addEmpleado(empleados:Empleado):Observable<Empleado>{
    return this.http.post<Empleado>(this.url+'/api/Empleadoes', empleados);
  }

  updateEmpleado(id:number, empleado:Empleado):Observable<Empleado>{
    return this.http.put<Empleado>(this.url+'/api/Empleadoes' + `/${id}`, empleado);
  }

  deleteEmpleado(id:number){
    return this.http.delete(this.url+'/api/Empleadoes' + `/${id}`);
  }
}
