import { Component, OnInit, inject } from '@angular/core';
import { ClienteService } from '../../service/cliente.service';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  imports: [],
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.css'
})
export class ListaClientesComponent implements OnInit {

  private _clienteService = inject(ClienteService);
  listaClientes: Cliente[]=[];
  ngOnInit(): void {
    this.getAllCliente();
  }

  getAllCliente(){
    this._clienteService.getAllClientes().subscribe((data:Cliente[])=>{
      this.listaClientes=data;
    })
  }
  public deleteCliente(id:number){
    if (confirm("Seguro que desea Eliminar")){
    this._clienteService.deleteCliente(id).subscribe(cliente=>{
      this.getAllCliente();
    
    })}}

  navigate(id:number){
    console.log(id);
  }
}
