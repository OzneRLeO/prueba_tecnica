import { Component, OnInit, inject } from '@angular/core';
import { LibroService } from '../services/libro.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Libro } from '../model.interface/libro.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioLibroService } from '../services/usuario-libro.service';
import { UsuarioLibro } from '../model.interface/usuario-libro.interface';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit {
  private libroService = inject(LibroService); 
  private usuarioLibroService = inject(UsuarioLibroService); 
  private fb = inject(FormBuilder) 
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  form?: FormGroup;
  libro?: Libro;
  usuarioLibro: UsuarioLibro = {} as UsuarioLibro;

  libros: any = [];
  librosComprados: any = []; 
  errors: string[] = [];

  ngOnInit():void{


    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.usuarioLibro.usuarioId = parseInt(id); 
    }else{
      this.router.navigate(['/']);
    }


    this.loadAll();
  }

  loadAll(){
    this.libroService.obtenerLibros( this.usuarioLibro.usuarioId).subscribe((libro)=>{
      this.libros = libro; 
    })
    this.usuarioLibroService.list( this.usuarioLibro.usuarioId).subscribe((data)=>{
      this.librosComprados = data; 
    })
  }

  
  comprar(libro:Libro){ 
    
      this.usuarioLibro.libroId = libro.id;
      this.usuarioLibroService.create(this.usuarioLibro).subscribe({
        next: ()=>{
          this.errors = [];
          this.loadAll();
      },
      error:response=>{
        this.errors = response.error.errors;
      }
      
      }) 

  }

  
}
