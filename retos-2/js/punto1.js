let num_1 = Number(prompt("Ingrese el valor"))
let num_2 = Number(prompt("Ingrese otro valor"))
if (num_1 > num_2){
    alert(`La suma de los valores es ${num_1+num_2} y su resta es ${num_1-num_2}`);
}
else{
    alert(`El producto de los valores es ${num_1*num_2} y su división es ${(num_1/num_2).toFixed(2)}`)
}