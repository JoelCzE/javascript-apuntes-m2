let a = Number(prompt(`Ingrese el valor para A`));
let b = Number(prompt(`Ingrese el valor para B`));
let c = Number(prompt(`Ingrese el valor para C`));
const nums = [];
nums.push(a,b,c);
const major = [];
let minor = [];
if (a<10 && b<10 && c<10){
    alert("Todos los valores ingresados son menores a '10'")
}
else{
    for (let i = 0; i<3; i++){
        if((nums[i]) > 10){
            major.push(nums[i])
        }
        if((nums[i]) < 10){
            minor.push(nums[i])
        }
    }
    alert(`Los numeros mayores a '10' son: ${major}`)
    if(minor.length < 1){
        alert("No hay numeros menores a '10'");
    }
    else{
        alert(`Los numeros menores a '10' son: ${minor}`)
    }
}
