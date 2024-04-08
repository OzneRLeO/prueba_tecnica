import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'libro/list',
        loadComponent: () => import('./libro-list/libro-list.component')
        .then(m => m.LibroListComponent)
    },
    {
        path:'libro/new',
        loadComponent: () => import('./libro-form/libro-form.component')
        .then(m => m.LibroFormComponent)
    },
    {
        path:'libro/:id/edit',
        loadComponent: () => import('./libro-form/libro-form.component')
        .then(m => m.LibroFormComponent)
    },

    {
        path:'usuario/list',
        loadComponent: () => import('./usuario-list/usuario-list.component')
        .then(m => m.UsuarioListComponent)
    },
    {
        path:'usuario/new',
        loadComponent: () => import('./usuario-form/usuario-form.component')
        .then(m => m.UsuarioFormComponent)
    },
    {
        path:'usuario/:id/edit',
        loadComponent: () => import('./usuario-form/usuario-form.component')
        .then(m => m.UsuarioFormComponent)
    },

    {
        path:'',
        loadComponent: () => import('./usuarios/usuarios.component')
        .then(m => m.UsuariosComponent)
    },
    {
        path:':id/misLibros',
        loadComponent: () => import('./libros/libros.component')
        .then(m => m.LibrosComponent)
    },
    {
        path:':idUser/libros',
        loadComponent: () => import('./libros/libros.component')
        .then(m => m.LibrosComponent)
    },
];
