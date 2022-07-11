import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { VentaDetalle } from '../modelos/detalle-venta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaDetalleService {
  constructor(private http:HttpClient) { }

  url:string = "http://localhost:57191";

  get(){
    return this.http.get(this.url+'/api/VentaDetalles');
  }

  add(ventaDetalle:VentaDetalle):Observable<VentaDetalle>{
    return this.http.post<VentaDetalle>(this.url+'/api/VentaDetalles', ventaDetalle);
  }

  update(id:number, ventaDetalle:VentaDetalle):Observable<VentaDetalle>{
    return this.http.put<VentaDetalle>(this.url+'/api/VentaDetalles' + `/${id}`, ventaDetalle);
  }

  delete(id:number){
    return this.http.delete(this.url+'/api/VentaDetalles' + `/${id}`);
  }
}
