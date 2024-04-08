package com.prueba.springboot.app.usuarios.repository;

import org.springframework.data.r2dbc.repository.R2dbcRepository;

import com.prueba.springboot.app.usuarios.model.Usuario;

public interface UsuarioRepository extends R2dbcRepository<Usuario, Integer>{

}
