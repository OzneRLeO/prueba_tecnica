import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../model.interface/usuario.interface';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
})
export class UsuarioFormComponent implements OnInit{
    private fb = inject(FormBuilder)
    private usuarioService = inject(UsuarioService)
    private router = inject(Router)
    private route = inject(ActivatedRoute)
 
    form?: FormGroup;
    usuario?: Usuario;
    errors: string[] = [];

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if(id){
          this.usuarioService.get(parseInt(id)).subscribe((usuario)=>{
            this.usuario = usuario;
            this.form = this.fb.group({
              nombre: [usuario.nombre, [Validators.required]],
              apellido: [usuario.apellido, [Validators.required]]
        
            })
        
          })
        }else{
          this.form = this.fb.group({
            nombre: ['', [Validators.required]],
            apellido: ['', [Validators.required]]
      
          })
        }
        
    }

 
    save(){
      const usuario = this.form!.value;
      if(this.form?.invalid){
        return;
      }
      if(this.usuario){
        this.usuarioService.update( this.usuario.id, usuario).subscribe({
          next: ()=>{
            this.errors = [];
            this.router.navigate(['../../usuario/list']);
          },
          error: response =>{
              this.errors = response.error.errors;
          }
        })
      }else{
        this.usuarioService.create(usuario).subscribe({
          next: ()=>{
            this.errors = [];
            this.router.navigate(['../../usuario/list']);
        },
        error:response=>{
          this.errors = response.error.errors;
        }
        
        })
      }
      
    
    /*       console.log(this.form.value) */

    }
}
