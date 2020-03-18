# Alcaldía FIS

Miguel Rodríguez - 20171020033

Liliana Herrera - 20171020019

Jairo Buitrago - 20171020002



### Guía de instalación

1. Montar la base de datos

2. Ejecutar el programa (debe tener PHP instalado): entrando en la carpeta del programa a través de una consola puede ejecutar el comando:

   ```
   php -S localhost:8888
   ```

   Esto le montará un servidor capaz de ejecutar el programa y al cual se puede acceder a través de un navegador web (Chrome, Firefox), a través de la URL localhost:8888

### Guía de uso

Por vistas se puede acceder modificando la url así:

* Vista de alcalde 
  * localhost:8888/alcalde
* Funcionario
  * localhost:8888/funcionario - Permite crear o editar cierta información
  * localhost:8888/relacionar - Permite vincular personas con ciertos elementos.
* Usuario 
  * localhost:8888 - En esta ventana se muestra un formulario con el cuál puede realizar las diferentes consultas para obtener información de barrio, entidad, persona o familia.