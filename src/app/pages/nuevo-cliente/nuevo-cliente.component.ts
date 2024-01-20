import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClienteService } from '../../service/cliente.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuevo-cliente',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './nuevo-cliente.component.html',
  styleUrl: './nuevo-cliente.component.css'
})
export class NuevoClienteComponent {
    
    formularioContacto: FormGroup;
    newCliente:any={
      nombre:"",
      apellido:"",
      telefono:"",
      email:"",
    }
    constructor(private form: FormBuilder){
      this.formularioContacto=this.form.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        telefono: ['', Validators.required],
        email: ['', [Validators.required,Validators.email]]
      })
    }
    private _cliente= inject(ClienteService)

    enviar(){
      this.newCliente.nombre=this.formularioContacto.value.nombre,
      this.newCliente.apellido=this.formularioContacto.value.apellido,
      this.newCliente.telefono=this.formularioContacto.value.telefono,
      this.newCliente.email=this.formularioContacto.value.email,
      this._cliente.newCliente(this.newCliente).subscribe(res=>{
        
      })
    }

    hasErrors(controlName:string, errorType:string){
      return this.formularioContacto.get(controlName)?.hasError(errorType) &&
      this.formularioContacto.get(controlName)?.touched
    }

    }


