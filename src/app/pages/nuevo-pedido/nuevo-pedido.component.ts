import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PedidoService } from '../../service/pedido.service';
import { Router } from '@angular/router';
import { Cuadernillo } from '../../models/cuadernillo';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { CuadernilloService } from '../../service/cuadernillo.service';
import { PipesPipe } from '../../utilities/pipes.pipe';


@Component({
  selector: 'app-nuevo-pedido',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,MatAutocompleteModule,MatFormField,MatLabel,FormsModule,PipesPipe],
  templateUrl: './nuevo-pedido.component.html',
  styleUrl: './nuevo-pedido.component.css'
})
export class NuevoPedidoComponent implements OnInit {
  
  resultadoBusqueda: Cuadernillo[] = []; // Definición de resultadoBusqueda
  campoBuscador="";
  formularioBuscador:FormGroup;
  private _pedidoServ = inject(PedidoService);
  private _router = inject(Router);
  private _servCuadernillo= inject(CuadernilloService);
  listCuadernillos : Cuadernillo[] =[];
  formularioPedido: FormGroup;
  fechaActual: Date;
  newPedido: any = {
    cliente: "",
    cuadernillos: "",
    fechaPedido: "",
    fechaEntrega: "",
    seña: "",
    total: "",
  }

  constructor(private form: FormBuilder, private forms:FormBuilder) {
    
    this.fechaActual = new Date();
    this.formularioPedido = this.form.group({
      cliente: ['', Validators.required],
      cuadernillos: ['', Validators.required],
      fechaPedido: [this.fechaActual, Validators.required],
      fechaEntrega: ['', Validators.required],
      seña: ['0', Validators.required],
      total: ['0', Validators.required]
    })
    this.formularioBuscador = this.forms.group({
        buscador: ['']
    });
  }
  ngOnInit(): void {
    this.getCuadernillos();
  
    
  }
  enviar() {
    this.newPedido.cliente = this.formularioPedido.value.cliente,
      this.newPedido.cuadernillos = this.formularioPedido.value.cuadernillos,
      this.newPedido.fechaPedido = this.formularioPedido.value.fechaPedido,
      this.newPedido.fechaEntrega = this.formularioPedido.value.fechaEntrega,
      this.newPedido.seña = this.formularioPedido.value.seña,
      this.newPedido.total = this.formularioPedido.value.total,

      this._pedidoServ.nuevoPedido(this.newPedido).subscribe(res => {

      })



  }
  public hasErrors(controlName: string, errorType: string) {
    return this.formularioPedido.get(controlName)?.hasError(errorType) &&
      this.formularioPedido.get(controlName)?.touched
  }
  public cancelar() {
    this._router.navigate(['']);
  }
  
  
  public getCuadernillos(){
    this._servCuadernillo.getAllCuadernillos().subscribe(cuadernillo=>
      this.listCuadernillos=cuadernillo)
  }

  actualizarBusqueda() {
    this.campoBuscador=this.formularioBuscador.controls['buscador'].value; 
    this.resultadoBusqueda = this.listCuadernillos.filter(cuadernillo => cuadernillo.nombre.includes(this.campoBuscador));

    
      }
}


