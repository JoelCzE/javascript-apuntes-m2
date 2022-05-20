let rta = " ";
while (rta!=="no"){
    rta= " ";
    // codigo principal
    let hght= 1;
    let prom= 0;
    let cont= -1;
    while (hght>0){
        hght=Number (prompt(`Ingrese la altura  0: dejar de insertar`));
        prom+= hght;
        cont++
    }
    alert(`La altura promedio insertada es ${(prom/cont).toFixed(2)} metros`);

    while(rta!=="si" && rta!=="no"){
        rta=prompt("¿Desea reiniciar el programa? si/no: ");
        rta=rta.toLowerCase();
    }
}