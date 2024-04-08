package com.prueba.springboot.app.libros;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.data.r2dbc.repository.config.EnableR2dbcRepositories;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@EnableR2dbcRepositories
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class }) 
@OpenAPIDefinition(info = @Info(
		title="Spring Webflux Crud Samples",
		version="1.0",
		description="samples documents"
		))
public class SpringbootServicioLibrosApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootServicioLibrosApplication.class, args);
	}

}
