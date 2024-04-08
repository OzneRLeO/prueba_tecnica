package com.prueba.springboot.app.libros.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prueba.springboot.app.libros.model.Libro;
import com.prueba.springboot.app.libros.repository.LibroRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/libros")
public class LibroRestController {
	@Autowired
	private LibroRepository libroRepository;
	
	@PostMapping("/add")
	Mono<Libro>  addLibro(@RequestBody Libro libro) { 
		return libroRepository.save(libro);
	}
	
	@GetMapping("/get/{id}")
	Mono<Libro> getLibros(@PathVariable int id){
		return libroRepository.findById(id);
	}
	
	@GetMapping("/all")
	Flux<Libro> getAllLibros(){
		return libroRepository.findAll();
	}
	
	@PutMapping("/update/{id}")
	Mono<Libro> updateLibro(@RequestBody Libro libro, @PathVariable int id){
		return libroRepository.findById(id)
				.map(
				(c) -> {
					c.setDescripcion(libro.getDescripcion());
					c.setTitulo(libro.getTitulo());
					return c;
				}).flatMap(c -> libroRepository.save(c));
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteLibro(@PathVariable int id){ 
	        Mono<Void> userMono = libroRepository.deleteById(id);
	        Mono<Void> bookMono = libroRepository.deleteUserBook(id);
	        
	        bookMono.subscribe();
	        userMono.subscribe();
	}
	
	@GetMapping("/obtenerLibros/{userId}")
	Flux<Libro> obtenerLibros(@PathVariable int userId){
		return libroRepository.obtenerLibros(userId);
	}
}
