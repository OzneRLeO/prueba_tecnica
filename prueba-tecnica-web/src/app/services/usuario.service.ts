import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Usuario } from '../model.interface/usuario.interface';


const HOST_DEFAULT = 'http://localhost:8082/api/v1/usuarios';

@Injectable({
  providedIn: 'root'
})
 
export class UsuarioService {
  private http = inject(HttpClient);
  

  list(){
    return this.http.get<Usuario[]>(`${HOST_DEFAULT}/all`);
  }  
  get(id: number){
    return this.http.get<Usuario>(`${HOST_DEFAULT}/get/${id}`);
  }
  create(usuario: any){
    return this.http.post<Usuario>(`${HOST_DEFAULT}/add`, usuario)
  }
  update(id: number, usuario: any){
    return this.http.put<Usuario>(`${HOST_DEFAULT}/update/${id}`, usuario)
  }
  delete(id: number){
    return this.http.delete<void>(`${HOST_DEFAULT}/delete/${id}`);
  }
  

}
