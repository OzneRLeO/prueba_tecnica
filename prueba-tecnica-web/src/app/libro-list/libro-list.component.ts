import { Component, OnInit, inject } from '@angular/core';
import { LibroService } from '../services/libro.service';
import { RouterModule } from '@angular/router';
import { Libro } from '../model.interface/libro.interface';

@Component({
  selector: 'app-libro-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './libro-list.component.html',
  styleUrl: './libro-list.component.css'
})
export class LibroListComponent implements OnInit {
  private libroService = inject(LibroService); 

  libros: any = [];

  ngOnInit():void{
    this.loadAll();
  }

  loadAll(){
    this.libroService.list().subscribe((data:any) => 
      {
        this.libros = data; 
        console.log(this.libros);
      }) 
  }


  deleteLibro(libro: Libro ){
      this.libroService.delete(libro.id).subscribe(()=>{
        this.loadAll();
      })
  }
}
