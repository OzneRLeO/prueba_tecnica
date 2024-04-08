package com.prueba.springboot.app.libros.repository;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.r2dbc.repository.R2dbcRepository;

import com.prueba.springboot.app.libros.model.Libro;
 

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface LibroRepository extends R2dbcRepository<Libro, Integer>{
	@Query("DELETE FROM storage_usuario.usuario_libro WHERE libro_id = :id") 
	Mono<Void> deleteUserBook(int id);
	
	@Query("select * from storage_libro.libro lib where lib.libro_id NOT in (select libro_id from storage_usuario.usuario_libro where usuario_id =:id ) ") 
	Flux<Libro> obtenerLibros(int id);
}
