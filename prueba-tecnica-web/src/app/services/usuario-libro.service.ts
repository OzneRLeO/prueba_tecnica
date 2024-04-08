import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UsuarioLibro } from '../model.interface/usuario-libro.interface';


const HOST_DEFAULT = 'http://localhost:8082/api/v1/usuarioLibros';

@Injectable({
  providedIn: 'root'
})
 
export class UsuarioLibroService {
  private http = inject(HttpClient);
  

  list(id:number){
    return this.http.get<UsuarioLibro[]>(`${HOST_DEFAULT}/librosComprados/${id}`); 
  }  
 
  create(usuarioLibro: any){
    return this.http.post<UsuarioLibro>(`${HOST_DEFAULT}/comprarLibros`, usuarioLibro)
  } 
  

}
