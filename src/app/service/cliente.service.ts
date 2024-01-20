import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private _httpCliente = inject(HttpClient);
  baseUrl= "http://localhost:8080/cliente";
  
  constructor() {}

  public getAllClientes():Observable<Cliente[]>{
    return this._httpCliente.get<Cliente[]>(this.baseUrl);
  }

  public getClienteById(id:number):Observable<Cliente>{
    return this._httpCliente.get<Cliente>(`${this.baseUrl}/${id}`)
  }
  
  public newCliente(cliente:Cliente):Observable<Cliente>{
    return this._httpCliente.post<Cliente>(`${this.baseUrl}`, cliente);
  }

  public deleteCliente(id:number):Observable<Cliente>{
    return this._httpCliente.delete<Cliente>(`${this.baseUrl}/${id}`);
  }
  public updatePedido(id:number, cliente: Cliente):Observable<Cliente>{
    return this._httpCliente.put<Cliente>(`${this.baseUrl}/${id}`,cliente);
  }
}
