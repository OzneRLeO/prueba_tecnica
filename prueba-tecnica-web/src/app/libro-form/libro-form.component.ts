import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LibroService } from '../services/libro.service';
import { Libro } from '../model.interface/libro.interface';

@Component({
  selector: 'app-libro-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './libro-form.component.html',
  styleUrl: './libro-form.component.css'
})
export class LibroFormComponent implements OnInit{
    private fb = inject(FormBuilder)
    private libroService = inject(LibroService)
    private router = inject(Router)
    private route = inject(ActivatedRoute)
 
    form?: FormGroup;
    libro?: Libro;
    errors: string[] = [];

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if(id){
          this.libroService.get(parseInt(id)).subscribe((libro)=>{
            this.libro = libro;
            this.form = this.fb.group({
              titulo: [libro.titulo, [Validators.required]],
              descripcion: [libro.descripcion, [Validators.required]]
        
            })
        
          })
        }else{
          this.form = this.fb.group({
            titulo: ['', [Validators.required]],
            descripcion: ['', [Validators.required]]
      
          })
        }
        
    }

 
    save(){
      const libro = this.form!.value;
      if(this.form?.invalid){
        return;
      }
      if(this.libro){
        this.libroService.update( this.libro.id, libro).subscribe({
          next: ()=>{
            this.errors = [];
            this.router.navigate(['../../libro/list']);
          },
          error: response =>{
              this.errors = response.error.errors;
          }
        })
      }else{
        this.libroService.create(libro).subscribe({
          next: ()=>{
            this.errors = [];
            this.router.navigate(['../../libro/list']);
        },
        error:response=>{
          this.errors = response.error.errors;
        }
        
        })
      }
      
    
    /*       console.log(this.form.value) */

    }
}
