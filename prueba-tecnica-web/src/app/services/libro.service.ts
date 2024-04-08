import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Libro } from '../model.interface/libro.interface';


const HOST_DEFAULT = 'http://localhost:8081/api/v1/libros';

@Injectable({
  providedIn: 'root'
})
 
export class LibroService {
  private http = inject(HttpClient);
  

  list(){
    return this.http.get<Libro[]>(`${HOST_DEFAULT}/all`);
  }  
  get(id: number){
    return this.http.get<Libro>(`${HOST_DEFAULT}/get/${id}`);
  }
  create(libro: any){
    return this.http.post<Libro>(`${HOST_DEFAULT}/add`, libro)
  }
  update(id: number, libro: any){
    return this.http.put<Libro>(`${HOST_DEFAULT}/update/${id}`, libro)
  }
  delete(id: number){
    return this.http.delete<void>(`${HOST_DEFAULT}/delete/${id}`);
  }
  
  obtenerLibros(userId: number){
    return this.http.get<Libro>(`${HOST_DEFAULT}/obtenerLibros/${userId}`);
  }
}
