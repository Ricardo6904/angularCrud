import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Venta } from '../modelos/venta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  constructor(private http:HttpClient) { }

  url:string = "http://localhost:57191";

  getVentas(){
    return this.http.get(this.url+'/api/Ventas');
  }

  addVenta(ventas:Venta):Observable<Venta>{
    return this.http.post<Venta>(this.url+'/api/Ventas', ventas);
  }

  updateVenta(id:number, empleado:Venta):Observable<Venta>{
    return this.http.put<Venta>(this.url+'/api/Ventas' + `/${id}`, Venta);
  }

  deleteVenta(id:number){
    return this.http.delete(this.url+'/api/Ventas' + `/${id}`);
  }
}
