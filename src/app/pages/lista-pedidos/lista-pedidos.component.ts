import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { PedidoService } from '../../service/pedido.service';

@Component({
  selector: 'app-lista-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-pedidos.component.html',
  styleUrl: './lista-pedidos.component.css'
})
export class ListaPedidosComponent implements OnInit {

  listaPedidos:any[]=[];
  
  private _pedidoServ = inject(PedidoService);
  ngOnInit(): void {
  this.getAllPedidos();
}
  public getAllPedidos(){
    this._pedidoServ.getAllPedidos().subscribe(pedido=>{
      this.listaPedidos=pedido;
    })
  }  
  public deletePedido(id:number){
    this._pedidoServ.deletePedido(id).subscribe(pedido=>{
      this.getAllPedidos();
    })
  }
  public navigate(id:number){
    console.log(id);
  }
}
