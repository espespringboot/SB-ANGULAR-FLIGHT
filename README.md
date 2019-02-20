# SB-ANGULAR-FLIGHT

Para el inicio del  proyecto se debe tomar en cuenta lo siguiente:
Tener instalado de manera local Gradle en su version 4.10.3
Es sencillo, la instalacion, puede seguir este tutorial. https://gradle.org/install/#manually
Crear el nombre de la base de Datos
En MySQL con el nombre de vuelos
Ejemplo:
CREATE DATABASE vuelos;
¿QUE CONTIENE?
El proyecto fue realizado mediante la siguiente URL: https://start.spring.io/
Se selecciono, las dependencias que se iba a utilizar entre ellas fueron:
JPA
JDBC
MYSQL
JERSEY
WEB-SOCKET
WEB
Se utilizo para hacer el BACK-END todas estas dependencias antes mencionadas.
ESTA COMPUESTO DE LA SIGUIENTE MANERA:
Controller    @en este se realizo todos los metodos a utilizar @get, @post, @put, @delete
Repositories  @en este se encuentra extendida el Jpa
Service       @se realiza los servicios para el consumo de los REST
DAO           @Contiene en si el Mapeo
Entities      @Contienen los modelos de las tablas
EL FRONT-END se lo realizo mediante el framework Angular.JS
Al igual que al hacer npm install en el angularsb
y al hacer en ng serve se puede hacer el front-end
En su ultima version, al igual que se ocupo Bootstrap para dar estilos y una mejor vista al cliente.
ESTA COMPUESTO DE LA SIGUIENTE MANERA:
STATIC  @Contiene la configuracion, el angular y bootstrap
JS @Contiene el angular, y su app, para controlar el manejo de la ruta a la cual se conectara para realizar el front-end
INDEX @Contiene todo el HTML junto con los componentes de Angular.
