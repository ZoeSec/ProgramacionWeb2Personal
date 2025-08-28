let numero = prompt("Ingresa tu numero:");
parseInt(numero);
if (numero > 10) {
    alert("Tu numero es mayor a 10");
}
else {
    alert("Tu numero no es mayor :("); 
}

let port = 3008;

if( port ){
    console.log("Conexion al puerto correcto");
}else{
    console.log("ERROR");
}