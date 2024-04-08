package com.prueba.springboot.app.usuarios.repository;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.r2dbc.repository.R2dbcRepository;

import com.prueba.springboot.app.usuarios.model.UsuarioLibro;

import reactor.core.publisher.Flux;

public interface UsuarioLibroRepository extends R2dbcRepository<UsuarioLibro, Integer>{
	@Query("select * from storage_libro.libro lib where lib.libro_id  in (select libro_id from storage_usuario.usuario_libro where usuario_id = :usuarioId )") 
    Flux<UsuarioLibro> findByUserBook(int usuarioId);
}
