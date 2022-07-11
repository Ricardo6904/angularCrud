import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cliente } from '../modelos/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }

  url:string = "http://localhost:57191";

  getClientes(){
    return this.http.get(this.url+'/api/Clientes');
  }

  addCliente(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url+'/api/Clientes', cliente);
  }

  updateCliente(id:number, cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.url+'/api/Clientes' + `/${id}`, cliente);
  }

  deleteCliente(id:number){
    return this.http.delete(this.url+'/api/Clientes' + `/${id}`);
  }
}
