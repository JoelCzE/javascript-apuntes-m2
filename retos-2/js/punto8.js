let fecha = new Date(prompt("Ingrese una fecha aaaa/mm/dd"));
if (fecha.getUTCDate()==25 && fecha.getMonth()+1 == 12){
    if(fecha.getFullYear() < 2022){
        alert(`El dia ${fecha.getUTCDate()}/${fecha.getUTCMonth()+1}/${fecha.getUTCFullYear()} fue navidad!`)
    }
    else{
        alert(`El dia ${fecha.getUTCDate()}/${fecha.getUTCMonth()+1}/${fecha.getUTCFullYear()} es navidad!`)
    }
}
else{
    if(fecha.getFullYear() < 2022){
        alert(`El dia ${fecha.getUTCDate()}/${fecha.getUTCMonth()+1}/${fecha.getUTCFullYear()} no fue navidad :/`)
    }
    else{
        alert(`El dia ${fecha.getUTCDate()}/${fecha.getUTCMonth()+1}/${fecha.getUTCFullYear()} no es navidad :/`)
    }
}