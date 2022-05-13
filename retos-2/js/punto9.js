let a = Number(prompt("Ingrese un valor para A"));
let b = Number(prompt("Ingrese un valor para B"));
let c = Number(prompt("Ingrese un valor para C"));
if(a==b && a==c){
    alert(`El resultado es ${(a+b)*c}`);
}
else{
    alert("Los valores ingresados no son homogéneos para realizar las operaciones")
}