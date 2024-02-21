import { Component, Inject, OnInit, inject } from '@angular/core';
import { CuadernilloService } from '../../service/cuadernillo.service';
import { Cuadernillo } from '../../models/cuadernillo';
import { CommonModule } from '@angular/common';
import { PipesPipe } from '../../utilities/pipes.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [CommonModule,PipesPipe,FormsModule],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css'
})
export class PruebaComponent implements OnInit{
  private _cuadernilloServ = inject(CuadernilloService);
  filterPost:string="";

  listaCuadernillos:Cuadernillo[]=[]
  ngOnInit(): void {
    this.getCuadernillos();
    console.log(this.listaCuadernillos);
  }

  public getCuadernillos(){
    this._cuadernilloServ.getAllCuadernillos().subscribe((cuadernillo)=>{
      this.listaCuadernillos=cuadernillo;
    })
  }
  
}
