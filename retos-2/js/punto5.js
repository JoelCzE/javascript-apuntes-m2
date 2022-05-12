a = Number(prompt("Ingrese un valor"));
if (a>0){
    rta=("Positivo");
}
else if (a==0){
    rta=("Nulo");
}
else{
    rta=("Negativo");
}
alert(`${a} es un numero ${rta}`);