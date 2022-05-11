a = Number(prompt("Ingrese un valor"))
let rta
switch (a){
    case a>0:
        rta = "Positivo"
        break;
    case a<0:
        rta = "Negativo"
        break;
    case 0:
        rta = "Nulo"
}
alert(rta)