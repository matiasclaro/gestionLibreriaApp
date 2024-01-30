import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PedidoService } from '../../service/pedido.service';
import { Router } from '@angular/router';
import { Cuadernillo } from '../../models/cuadernillo';
import { Observable, map, startWith } from 'rxjs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { CuadernilloService } from '../../service/cuadernillo.service';


@Component({
  selector: 'app-nuevo-pedido',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,MatAutocompleteModule,MatFormField,MatLabel],
  templateUrl: './nuevo-pedido.component.html',
  styleUrl: './nuevo-pedido.component.css'
})
export class NuevoPedidoComponent implements OnInit {

  control= new FormControl();
  filCuadernillos : Observable<Cuadernillo[]> | undefined   
  private _pedidoServ = inject(PedidoService);
  private _router = inject(Router);
  private _servCuadernillo= inject(CuadernilloService)
  private listCuadernillos : Cuadernillo[] =[] 

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

  constructor(private form: FormBuilder) {
    this.fechaActual = new Date();
    this.formularioPedido = this.form.group({
      cliente: ['', Validators.required],
      cuadernillos: ['', Validators.required],
      fechaPedido: [this.fechaActual, Validators.required],
      fechaEntrega: ['', Validators.required],
      seña: ['0', Validators.required],
      total: ['0', Validators.required]
    })
  }
  ngOnInit(): void {
    this.getCuadernillos();
    this.filCuadernillos = this.control.valueChanges.pipe(
      startWith(''),
      map(value => value? this._filter(value) : this.listCuadernillos.slice())
    )
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
  /*filtro buscador*/
  private _filter(val:string): Cuadernillo[]{
    const formatVal= val.toLocaleLowerCase();
    return this.listCuadernillos.filter(cuader=>cuader.nombre.toLocaleLowerCase().
    indexOf(formatVal)===0)
  }

  public getCuadernillos(){
    this._servCuadernillo.getAllCuadernillos().subscribe(cuadernillo=>
      this.listCuadernillos=cuadernillo)
  }
}


