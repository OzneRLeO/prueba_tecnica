import { Component, OnInit, inject } from '@angular/core'; 
import { RouterModule } from '@angular/router';
import { Usuario } from '../model.interface/usuario.interface';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './usuario-list.component.html',
  styleUrl: './usuario-list.component.css'
})
export class UsuarioListComponent implements OnInit {
  private usuarioService = inject(UsuarioService); 

  usuarios: any = [];

  ngOnInit():void{
    this.loadAll();
  }

  loadAll(){
    this.usuarioService.list().subscribe((data:any) => 
      {
        this.usuarios = data; 
        console.log(this.usuarios);
      }) 
  }


  deleteUsuario(usuario: Usuario ){
      this.usuarioService.delete(usuario.id).subscribe(()=>{
        this.loadAll();
      })
  }
}
