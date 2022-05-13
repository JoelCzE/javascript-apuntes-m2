let nums=[];
let rta= false;
for (let i=0; i<3; i++){
    nums.push(prompt("Ingrese un valor"));
    if (nums[i] < 10){
        rta=true
    }
}
if (rta){
    alert("Algunos de los numeros es menor a '10'")
}
else{
    alert("Todos los numeros son mayores a '10'")
}