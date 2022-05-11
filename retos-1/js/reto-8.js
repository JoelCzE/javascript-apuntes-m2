let total = Number(prompt("Ingrese el total a pagar"));
let cant_person = Number(prompt("¿Cuántas personas pagarán?"));
let tip = Number(prompt("Ingrese el porcentaje de la propina"));
let tax = Number(prompt("Ingrese el porcentaje del impuesto"));
total = (total + (total * (tip / 100)) + (total * (tax / 100))) / cant_person;
alert("Se debe pagar en total $" + total.toFixed(2) + " entre " + cant_person + " personas")