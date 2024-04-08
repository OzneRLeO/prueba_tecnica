FROM openjdk:17-oracle
COPY target/*.jar springboot-servicio-usuarios.jar
EXPOSE 8082
ENTRYPOINT [ "java","-jar", "springboot-servicio-usuarios.jar" ]