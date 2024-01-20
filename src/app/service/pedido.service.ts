import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private _cliente = inject(HttpClient)
  baseUrl="http://localhost:8080/pedido"
  constructor() { }

  public getAllPedidos():Observable<any[]>{
    return this._cliente.get<any[]>(this.baseUrl);
  }
  public getPedidoById(id:number):Observable<any>{
    return this._cliente.get<any>(`${this.baseUrl}/${id}`);
  }

  public deletePedido(id:number):Observable<any>{
    return this._cliente.delete<any>(`${this.baseUrl}/${id}`);
  }

  public nuevoPedido(pedido:Pedido):Observable<Pedido>{
    return this._cliente.post<Pedido>(`${this.baseUrl}`,pedido);
  }
  
}
