class Nodo {
    constructor(id, titulo, descripcion) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = 'Pendiente'; 
        this.siguiente = null;
    }
}

class ListaEnlazada {
    constructor() {
        this.cabeza = null;
        this.contadorId = 1; 
    }

    agregarAlInicio(titulo, descripcion) {
        const nuevoNodo = new Nodo(this.contadorId++, titulo, descripcion);
        nuevoNodo.siguiente = this.cabeza;
        this.cabeza = nuevoNodo;
        return nuevoNodo.id;
    }

    agregarAlFinal(titulo, descripcion) {
        const nuevoNodo = new Nodo(this.contadorId++, titulo, descripcion);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
            return nuevoNodo.id;
        }
        let actual = this.cabeza;
        while (actual.siguiente) {
            actual = actual.siguiente;
        }
        actual.siguiente = nuevoNodo;
        return nuevoNodo.id;
    }

    eliminarPorId(id) {
        if (!this.cabeza) return false;

        if (this.cabeza.id === id) {
            this.cabeza = this.cabeza.siguiente;
            return true;
        }

        let actual = this.cabeza;
        while (actual.siguiente) {
            if (actual.siguiente.id === id) {
                actual.siguiente = actual.siguiente.siguiente;
                return true;
            }
            actual = actual.siguiente;
        }
        return false;
    }

    marcarCompletada(id) {
        let actual = this.cabeza;
        while (actual) {
            if (actual.id === id) {
                actual.estado = 'Completada';
                return true;
            }
            actual = actual.siguiente;
        }
        return false;
    }

    buscarTarea(criterio) {
        let resultados = [];
        let actual = this.cabeza;
        
        while (actual) {
            const texto = (actual.titulo + ' ' + actual.descripcion).toLowerCase();
            if (actual.id.toString() === criterio || texto.includes(criterio.toLowerCase())) {
                resultados.push(actual);
            }
            actual = actual.siguiente;
        }
        return resultados;
    }

    listarTareas() {
        if (!this.cabeza) {
            console.log("\n⚠️ No hay tareas registradas.\n");
            return;
        }

        let actual = this.cabeza;
        let tabla = [];
        let posicion = 1;

        while (actual) {
            tabla.push({
                "Posición": posicion,
                "ID": actual.id,
                "Título": actual.titulo,
                "Estado": actual.estado,
                "Descripción": actual.descripcion
            });
            actual = actual.siguiente;
            posicion++;
        }

        console.log("\n=== LISTA DE TAREAS ===");
        console.table(tabla);
    }
}

module.exports = ListaEnlazada;