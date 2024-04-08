package com.prueba.springboot.app.usuarios.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.prueba.springboot.app.usuarios.model.Usuario;
import com.prueba.springboot.app.usuarios.model.UsuarioLibro;
import com.prueba.springboot.app.usuarios.repository.UsuarioLibroRepository;
import com.prueba.springboot.app.usuarios.repository.UsuarioRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/usuarioLibros")
public class UsuarioLibroRestController     {
	@Autowired
	private UsuarioLibroRepository usuarioLibroRepository;
	
 
	@GetMapping("/librosComprados/{userId}")
	Flux<UsuarioLibro> getAllUsuarios(@PathVariable int userId){
		return usuarioLibroRepository.findByUserBook(userId);
	}
	
	@PostMapping("/comprarLibros")
	Mono<UsuarioLibro>  addLibro(@RequestBody UsuarioLibro usuarioLibro) {  
		return usuarioLibroRepository.save(usuarioLibro);		
	}
	 
}
