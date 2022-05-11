a = Number(prompt("Ingrese la primer nota"));
b = Number(prompt("Ingrese la segunda nota"));
c = Number(prompt("Ingrese la última nota:"));
if (((a+b+c)/3) >= 7){
    alert(`La nota final es ${((a+b+c)/3).toFixed(2)}: Promocionado!`)

}
else{
    alert(`La nota final es ${((a+b+c)/3).toFixed(2)}: Ha desaprobado la materia.`)
}