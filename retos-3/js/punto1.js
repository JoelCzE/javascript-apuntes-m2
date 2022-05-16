let rta = " ";
let nota = 0;
let major = 0;
let minor = 0;
let cont= 10;
while (rta!=="no"){
    rta= " ";
    for (let i = 1; i < 11; i++){
        nota = prompt(`Ingrese la nota de ${cont} alumnos`);
        if(nota>=7){
            major++
        }
        else{
            minor++
        }
        cont--;
    }
    alert(`Las notas mayores o iguales a 7 son: ${major}\nLas notas menores a 7 son: ${minor}`);
    while(rta!=="si" && rta!=="no"){
        rta=prompt("¿Desea reiniciar el programa? si/no: ");
        rta=rta.toLowerCase();
    }
}