# 📝 Gestor de Tareas CLI con Listas Enlazadas

Este proyecto es una aplicación de línea de comandos (CLI) desarrollada en *Node.js* que permite administrar tareas pendientes. El núcleo del programa está construido desde cero utilizando la estructura de datos de *Lista Enlazada Simple (Linked List)*, sin hacer uso de arreglos nativos para el almacenamiento principal.

## 👥 Integrantes del Grupo #1
*   José Argenis Pérez
*   Tania Guzmán Centeno
*   Teodora Eliuth López Lira

## ⚙️ Funcionalidades (CLI)
El sistema cuenta con un menú interactivo en consola que permite realizar las siguientes operaciones:
1.  *Agregar tarea:* Permite insertar un nuevo nodo al *inicio* (método unshift) o al *final* (método push) de la lista.
2.  *Eliminar por ID:* Busca un nodo por su identificador único y lo desconecta de la lista, mostrando confirmación o error si no existe.
3.  *Marcar como completada:* Busca una tarea por ID y cambia su estado interno reflejándolo visualmente.
4.  *Buscar tarea:* Consulta y muestra detalles específicos ingresando el ID o una palabra clave.
5.  *Listar ordenadas:* Imprime en consola una tabla formateada (console.table) mostrando todos los nodos.
6.  *Salir:* Cierra la aplicación de forma segura.

## 🛠️ Tecnologías
*   *Lenguaje:* JavaScript (Node.js)
*   *Entorno:* Git Bash / Terminal de VS Code
