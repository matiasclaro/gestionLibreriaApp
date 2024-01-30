import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CuadernilloService } from '../../service/cuadernillo.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-cuadernillo',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './nuevo-cuadernillo.component.html',
  styleUrl: './nuevo-cuadernillo.component.css'
})
export class NuevoCuadernilloComponent implements OnInit{
  private _router = inject(Router);
  ngOnInit(): void {
    
  }
  
  formularioCuadernillo:FormGroup;
  newCuadernillo:any={
    nombre:"",
    precio:"",
    descripcion:"",
    cantHojas:0,
    formatoImpresion:""
  }
  private _cuadernilloServ=inject(CuadernilloService);

  constructor(private form:FormBuilder){
    this.formularioCuadernillo=this.form.group({
      nombre:['',Validators.required],
      descripcion:['',Validators.required],
      precio:['',[Validators.required,Validators.pattern(/^[1-9]\d{6,10}$/)]],
      cantHojas:['',[Validators.required,Validators.pattern(/^[1-9]\d{6,10}$/)]],
      formatoImpresion:['',Validators.required], 
  })
}

  public enviar(){
    this.newCuadernillo.nombre=this.formularioCuadernillo.value.nombre,
    this.newCuadernillo.descripcion=this.formularioCuadernillo.value.descripcion,
    this.newCuadernillo.precio=this.formularioCuadernillo.value.precio,
    this.newCuadernillo.cantHojas=this.formularioCuadernillo.value.cantHojas,
    this.newCuadernillo.formatoImpresion=this.formularioCuadernillo.value.formatoImpresion,
    this._cuadernilloServ.newCuadernillo(this.newCuadernillo).subscribe(res=>{
      
    })
  }

  public hasErrors(controlName:string, errorType:string){
    return this.formularioCuadernillo.get(controlName)?.hasError(errorType) &&
    this.formularioCuadernillo.get(controlName)?.touched
  }
  public cancelar(){
    this._router.navigate(['']);
}
}