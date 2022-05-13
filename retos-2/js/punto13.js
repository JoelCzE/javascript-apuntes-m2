let salary = Number(prompt("Ingrese su salario"))
let antiquity = Number(prompt("Ingrese los años de antiguedad"))
if(salary<500 && antiquity>=10){
    salary += (salary*0.2)
}
else if(salary<500 && antiquity<10){
    salary += (salary*0.05)
}
alert(`El nuevo sueldo a pagar es $${salary}`)