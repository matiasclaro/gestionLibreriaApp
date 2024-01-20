import { Component, OnInit, inject } from '@angular/core';
import { CuadernilloService } from '../../service/cuadernillo.service';
import { Cuadernillo } from '../../models/cuadernillo';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-cuadernillos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-cuadernillos.component.html',
  styleUrl: './lista-cuadernillos.component.css'
})
export class ListaCuadernillosComponent implements OnInit {
  private _cuadernilloServ = inject(CuadernilloService)
  private _router = inject(Router)
  listaCuadernillos:Cuadernillo[]=[];

  ngOnInit(): void {
    this.getCuadernillos();
  }

  public getCuadernillos(){
    this._cuadernilloServ.getAllCuadernillos().subscribe(cuadernillo=>{
      this.listaCuadernillos=cuadernillo;
    })
  }

  public navigate(id:number){
    this._router.navigate(['/nuevo-cuadernillo',String(id)]);
  }
  public deleteCuadernillo(id:number){
    if (confirm("Seguro que desea eliminar")){
      this._cuadernilloServ.deleteCuadernillo(id).subscribe(cuadernillo=>{
        this.getCuadernillos();
      })
    }
  }

}
