import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PedidoService } from '../../service/pedido.service';

@Component({
  selector: 'app-nuevo-pedido',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './nuevo-pedido.component.html',
  styleUrl: './nuevo-pedido.component.css'
})
export class NuevoPedidoComponent {
  private _pedidoServ = inject(PedidoService);

  formularioPedido:FormGroup;
  newPedido:any={
    cliente:"",
    cuadernillos:"",
    fechaPedido:"",
    fechaEntrega:"",
    seña:"",
    total:"",
    }

    constructor(private form:FormBuilder){
      this.formularioPedido=this.form.group({
        cliente:['',Validators.required],
        cuadernillos:['',Validators.required],
        fechaPedido:['',Validators.required],
        fechaEntrega:['',Validators.required],
        seña:['',Validators.required],
        total:['',Validators.required]
      })
    }
    enviar(){
      this.newPedido.cliente=this.formularioPedido.value.cliente,
      this.newPedido.cuadernillos=this.formularioPedido.value.cuadernillos,
      this.newPedido.fechaPedido=this.formularioPedido.value.fechaPedido,
      this.newPedido.fechaEntrega=this.formularioPedido.value.fechaEntrega,
      this.newPedido.seña=this.formularioPedido.value.seña,
      this.newPedido.total=this.formularioPedido.value.total,
        
      this._pedidoServ.nuevoPedido(this.newPedido).subscribe(res=>{
        
      })
        
      

    }
    public hasErrors(controlName:string, errorType:string){
      return this.formularioPedido.get(controlName)?.hasError(errorType) &&
      this.formularioPedido.get(controlName)?.touched
    }
}
