let num1 = Number(prompt("Ingresa el primer número"));
let num2 = Number(prompt("Ingresa el segundo número"));
let num3 = Number(prompt("Ingresa el tercer número"));

if (num1 === num2 && num2 === num3) {
    alert("Los tres números son iguales");
} else {
    // Calcular el mayor
    let mayor;
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
    } else {
        mayor = num3;
    }

    // Calcular el menor
    let menor;
    if (num1 <= num2 && num1 <= num3) {
        menor = num1;
    } else if (num2 <= num1 && num2 <= num3) {
        menor = num2;
    } else {
        menor = num3;
    }

    alert(`El número mayor es ${mayor} y el número menor es ${menor}`);
}
