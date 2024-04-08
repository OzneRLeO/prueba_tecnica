FROM openjdk:17-oracle
COPY target/*.jar springboot-servicio-libros.jar
EXPOSE 8081
ENTRYPOINT [ "java","-jar", "springboot-servicio-libros.jar" ]