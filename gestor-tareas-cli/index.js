const readline = require('readline');
const ListaEnlazada = require('./linkedList');

const lista = new ListaEnlazada();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const preguntar = (texto) => {
    return new Promise((resolve) => {
        rl.question(texto, (respuesta) => {
            resolve(respuesta);
        });
    });
};

async function menu() {
    console.log("\n==============================");
    console.log("  GESTOR DE TAREAS CLI (Listas)");
    console.log("==============================");
    console.log("1. Agregar tarea");
    console.log("2. Eliminar tarea por ID");
    console.log("3. Marcar tarea como completada");
    console.log("4. Buscar tarea");
    console.log("5. Listar todas las tareas");
    console.log("6. Salir");

    const opcion = await preguntar("\nElige una opción (1-6): ");

    switch (opcion) {
        case '1':
            await agregarTarea();
            break;
        case '2':
            await eliminarTarea();
            break;
        case '3':
            await completarTarea();
            break;
        case '4':
            await buscarTarea();
            break;
        case '5':
            lista.listarTareas();
            break;
        case '6':
            console.log("👋 ¡Hasta luego!");
            rl.close();
            return;
        default:
            console.log("❌ Opción no válida. Intenta de nuevo.");
    }
    
    await menu();
}
//Funcion para solicitar datos al usurio y agregar tarea
async function agregarTarea() {
    const titulo = await preguntar("Ingresa el título de la tarea: ");
    const descripcion = await preguntar("Ingresa la descripción: ");
    const ubicacion = await preguntar("¿Dónde deseas insertarla? (1: Inicio / 2: Final): ");

    let idGenerado;
    if (ubicacion === '1') {
        idGenerado = lista.agregarAlInicio(titulo, descripcion);
        console.log('✅ Tarea agregada al INICIO con ID: ' + idGenerado);
    } else {
        idGenerado = lista.agregarAlFinal(titulo, descripcion);
        console.log('✅ Tarea agregada al FINAL con ID: ' + idGenerado);
    }
}

async function eliminarTarea() {
    const id = await preguntar("Ingresa el ID de la tarea a eliminar: ");
    const eliminado = lista.eliminarPorId(parseInt(id));
    
    if (eliminado) {
        console.log('✅ Tarea con ID ' + id + ' eliminada correctamente.');
    } else {
        console.log('❌ Error: No se encontró ninguna tarea con el ID ' + id + '.');
    }
}

async function completarTarea() {
    const id = await preguntar("Ingresa el ID de la tarea a completar: ");
    const completado = lista.marcarCompletada(parseInt(id));
    
    if (completado) {
        console.log('✅ Tarea con ID ' + id + ' marcada como COMPLETADA.');
    } else {
        console.log('❌ Error: No se encontró la tarea con ID ' + id + '.');
    }
}

async function buscarTarea() {
    const criterio = await preguntar("Ingresa el ID o palabra clave a buscar: ");
    const resultados = lista.buscarTarea(criterio);

    if (resultados.length > 0) {
        console.log('\n🔍 Se encontraron ' + resultados.length + ' resultado(s):');
        console.table(resultados.map(t => ({
            "ID": t.id,
            "Título": t.titulo,
            "Estado": t.estado,
            "Descripción": t.descripcion
        })));
    } else {
        console.log('❌ No se encontraron tareas con el criterio: "' + criterio + '"');
    }
}

console.clear();
menu();