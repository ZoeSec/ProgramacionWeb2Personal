// Lista de artículos en la tienda
var inventario = [
    { nombre: 'camisa', precio: 300 },
    { nombre: 'pantalon', precio: 500 },
    { nombre: 'zapatos', precio: 400 },
    { nombre: 'sombrero', precio: 200 }
];

var bolsa = [];

// MENU DE USUARIO 

function menuArticulos() {
    var opciones = "Seleccione una opción:\n";
    for (var i = 0; i < inventario.length; i++) {
        opciones += (i + 1) + ". " + inventario[i].nombre + " - $" + inventario[i].precio + "\n";
    }
    opciones += (inventario.length + 1) + ". Ver bolsa y total\n";
    opciones += (inventario.length + 2) + ". Cambiar producto en bolsa\n";
    opciones += (inventario.length + 3) + ". Quitar producto de bolsa\n";
    opciones += (inventario.length + 4) + ". Salir al menú principal\n";
    return opciones;
}

function añadirABolsa(posicion) {
    var elegido = inventario[posicion];
    bolsa.push(elegido);
    console.log('Se añadió "' + elegido.nombre + '" a la bolsa.');
}

function mostrarBolsa() {
    if (bolsa.length === 0) {
        alert("Tu bolsa está vacía.");
    } else {
        var texto = "Contenido de la bolsa:\n";
        var total = 0;
        for (var i = 0; i < bolsa.length; i++) {
            texto += (i + 1) + ". " + bolsa[i].nombre + " - $" + bolsa[i].precio + "\n";
            total += bolsa[i].precio;
        }
        texto += "\nTotal: $" + total;
        alert(texto);
    }
}

function cambiarProductoBolsa() {
    if (bolsa.length === 0) {
        alert("No hay productos para actualizar.");
        return;
    }
    mostrarBolsa();
    var indice = prompt("Elige el número del producto que quieras cambiar:") - 1;

    if (indice >= 0 && indice < bolsa.length) {
        var lista = "Elige el nuevo producto:\n";
        for (var i = 0; i < inventario.length; i++) {
            lista += (i + 1) + ". " + inventario[i].nombre + " - $" + inventario[i].precio + "\n";
        }

        var nuevo = Number(prompt(lista)) - 1;
        if (nuevo >= 0 && nuevo < inventario.length) {
            bolsa[indice] = inventario[nuevo];
            alert("Producto actualizado en la bolsa.");
            mostrarBolsa();
        } else {
            alert("Opción no válida.");
        }
    } else {
        alert("Opción no válida.");
    }
}

function quitarDeBolsa() {
    if (bolsa.length === 0) {
        alert("No hay productos para eliminar.");
        return;
    }
    mostrarBolsa();
    var indice = prompt("Indica el número del producto a eliminar:") - 1;

    if (indice >= 0 && indice < bolsa.length) {
        var eliminado = bolsa.splice(indice, 1);
        alert('Se eliminó "' + eliminado[0].nombre + '" de la bolsa.');
        mostrarBolsa();
    } else {
        alert("Opción no válida.");
    }
}

function menuUsuario() {
    var opcion;
    do {
        opcion = Number(prompt(menuArticulos()));

        if (isNaN(opcion) || opcion < 1 || opcion > inventario.length + 4) {
            alert("Opción no válida.");
        } else if (opcion >= 1 && opcion <= inventario.length) {
            añadirABolsa(opcion - 1);
        } else if (opcion === inventario.length + 1) {
            mostrarBolsa();
        } else if (opcion === inventario.length + 2) {
            cambiarProductoBolsa();
        } else if (opcion === inventario.length + 3) {
            quitarDeBolsa();
        }

    } while (opcion !== inventario.length + 4);
}

// ======== MENÚ DE ADMINISTRADOR ========

function listarInventario() {
    if (inventario.length === 0) {
        alert("No hay productos en la tienda.");
        return;
    }
    var lista = "Inventario actual:\n";
    for (var i = 0; i < inventario.length; i++) {
        lista += (i + 1) + ". " + inventario[i].nombre + " - $" + inventario[i].precio + "\n";
    }
    alert(lista);
}

function añadirProducto() {
    var nombreNuevo = prompt("Nombre del producto:");
    var precioNuevo = Number(prompt("Precio del producto:"));
    if (nombreNuevo && !isNaN(precioNuevo) && precioNuevo > 0) {
        inventario.push({ nombre: nombreNuevo, precio: precioNuevo });
        alert("Producto añadido correctamente.");
    } else {
        alert("Datos inválidos, no se agregó.");
    }
}

function menuAdmin() {
    var opcion;
    do {
        opcion = Number(prompt(
            "MENÚ ADMINISTRADOR:\n" +
            "1. Ver inventario\n" +
            "2. Añadir producto\n" +
            "3. Salir al menú principal"
        ));

        if (opcion === 1) {
            listarInventario();
        } else if (opcion === 2) {
            añadirProducto();
        } else if (opcion !== 3) {
            alert("Opción no válida.");
        }

    } while (opcion !== 3);
}

//  MENU PRINCIPAL 

function menuPrincipal() {
    var opcion;
    do {
        opcion = Number(prompt(
            "BIENVENIDO\n" +
            "1. Usuario\n" +
            "2. Administrador\n" +
            "3. Salir del programa"
        ));

        if (opcion === 1) {
            menuUsuario();
        } else if (opcion === 2) {
            menuAdmin();
        } else if (opcion !== 3) {
            alert("Opción no válida.");
        }

    } while (opcion !== 3);

    alert("Programa finalizado.");
}

//  EJECUTAR PROGRAMA 
menuPrincipal();
