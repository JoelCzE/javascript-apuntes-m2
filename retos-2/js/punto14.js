let num1 = 0; num2 = 0; num3 = 0;
let nums = [];
while(num1==num2 && num1==num3 && num2==num3){
    alert("Los valores deben ser distintos entre si...");
    num1 = prompt("Ingrese un valor: ");
    num2 = prompt("Ingrese un valor: ");
    num3 = prompt("Ingrese un valor: "); 
}
nums.push(num1,num2,num3);
let major = num1;
let minor = num2;
for (i=0; i<nums.length;i++){
    if(major<nums[i]){
        major=nums[i]
    }
    if(minor>nums[i]){
        minor=nums[i]
    }
}
alert(`El mayor es ${major}, el menor es ${minor} y el rango de variacion es ${major-minor}.`)