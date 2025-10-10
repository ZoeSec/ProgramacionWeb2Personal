// Lista para guardar las tareas
let listaTareas = [];

// Mostrar menú y capturar opción
function menu() {
    return parseInt(prompt(`
==== MENU TAREAS ====
1) Añadir tarea
2) Mostrar tareas
3) Completar tarea
4) Borrar tarea
5) Salir
Ingresa tu opción:
`));
}

// Añadir nueva tarea
function añadirTarea() {
    let titulo = prompt("Escribe el nombre de la tarea:");
    if (titulo) {
        listaTareas.push({ nombre: titulo, hecha: false });
        alert("Tarea agregada");
    } else {
        alert("No puedes dejar el nombre vacío");
    }
}

// Ver todas las tareas
function mostrarTareas() {
    if (listaTareas.length === 0) {
        alert("No hay tareas todavía");
        return;
    }

    let texto = "Tus tareas:\n";
    listaTareas.forEach((t, i) => {
        texto += `${i + 1}) ${t.nombre} [${t.hecha ? "Hecha" : "Pendiente"}]\n`;
    });
    alert(texto);
}

// Marcar una tarea como completada
function completarTarea() {
    if (listaTareas.length === 0) {
        alert("No hay tareas para completar");
        return;
    }

    let num = parseInt(prompt("Número de la tarea a completar:")) - 1;
    if (num >= 0 && num < listaTareas.length) {
        if (!listaTareas[num].hecha) {
            listaTareas[num].hecha = true;
            alert(`Tarea "${listaTareas[num].nombre}" completada`);
        } else {
            alert("Esta tarea ya estaba hecha");
        }
    } else {
        alert("Número inválido");
    }
}

// Borrar tarea
function borrarTarea() {
    if (listaTareas.length === 0) {
        alert("No hay tareas que borrar");
        return;
    }

    let num = parseInt(prompt("Número de la tarea a borrar:")) - 1;
    if (num >= 0 && num < listaTareas.length) {
        let borrada = listaTareas.splice(num, 1);
        alert(`Tarea "${borrada[0].nombre}" eliminada`);
    } else {
        alert("Número inválido");
    }
}

// Ciclo principal
function arrancar() {
    let activo = true;

    while (activo) {
        let opcion = menu();

        switch (opcion) {
            case 1: añadirTarea(); break;
            case 2: mostrarTareas(); break;
            case 3: completarTarea(); break;
            case 4: borrarTarea(); break;
            case 5: 
                alert("Hasta luego");
                activo = false;
                break;
            default: alert("Opción inválida, intenta de nuevo");
        }
    }

    alert("Programa terminado");
}

// Iniciar
arrancar();
