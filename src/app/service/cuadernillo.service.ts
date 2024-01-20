import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Cuadernillo } from '../models/cuadernillo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuadernilloService {

  private _client = inject(HttpClient);
  private baseUrl="http://localhost:8080/cuadernillo"; 
  constructor() { }


  public getAllCuadernillos():Observable<Cuadernillo[]>{
    return this._client.get<Cuadernillo[]>(this.baseUrl);
  }

  public getCuadernilloById(id:number):Observable<Cuadernillo>{
    return this._client.get<Cuadernillo>(`${this.baseUrl}/${id}`);
  }

  public deleteCuadernillo(id:number):Observable<Cuadernillo>{
    return this._client.delete<Cuadernillo>(`${this.baseUrl}/${id}`);
  }

  public newCuadernillo(cuadernillo:Cuadernillo):Observable<Cuadernillo>{
    return this._client.post<Cuadernillo>(`${this.baseUrl}`,cuadernillo);
  }

  public updateCuadernillo(id:number,cuadernillo:Cuadernillo):Observable<Cuadernillo>{
    return this._client.put<Cuadernillo>(`${this.baseUrl}/${id}`,cuadernillo);
  }

}
