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
import org.springframework.web.bind.annotation.RestController;

import com.prueba.springboot.app.usuarios.model.Usuario;
import com.prueba.springboot.app.usuarios.repository.UsuarioRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/usuarios")
public class UsuarioRestController     {
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@PostMapping("/add")
	Mono<Usuario>  addLibro(@RequestBody Usuario usuario) { 
		return usuarioRepository.save(usuario);
	}
	
	@GetMapping("/get/{id}")
	Mono<Usuario> getUsuario(@PathVariable int id){
		return usuarioRepository.findById(id);
	}
	
	@GetMapping("/all")
	Flux<Usuario> getAllUsuarios(){
		return usuarioRepository.findAll();
	}
	
	@PutMapping("/update/{id}")
	Mono<Usuario> updateUsuario(@RequestBody Usuario usuario, @PathVariable int id){
		return usuarioRepository.findById(id)
				.map(
				(c) -> {
					c.setNombre(usuario.getNombre());
					c.setApellido(usuario.getApellido());
					return c;
				}).flatMap(c -> usuarioRepository.save(c));
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteUsuario(@PathVariable int id){ 
	        Mono<Void> userMono = usuarioRepository.deleteById(id);
	        userMono.subscribe();
	}
}
