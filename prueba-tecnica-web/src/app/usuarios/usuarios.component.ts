import { Component, OnInit, inject } from '@angular/core'; 
import { RouterModule } from '@angular/router'; 
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {
  private usuarioService = inject(UsuarioService); 

  usuarios: any = [];

  ngOnInit():void{
    this.loadAll();
  }

  loadAll(){
    this.usuarioService.list().subscribe((data:any) => 
      {
        this.usuarios = data;  
      }) 
  }

 
}
