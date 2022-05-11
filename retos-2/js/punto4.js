let a = Number(prompt("Ingrese el valor para a"));
let b = Number(prompt("Ingrese el valor para b"));
let c = Number(prompt("Ingrese el valor para c"));
if (b>a && b>c){
    a=b;
}
else if(c>a && c>b){
    a=c;
}
alert(`El valor mayor ingresado es ${a}`)