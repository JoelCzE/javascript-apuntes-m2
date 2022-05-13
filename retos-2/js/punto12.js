let x = 0;
let y = 0;
while(x==0 && y==0){
    alert("Los valores ingresados deben ser distinto de '0'");
    x = prompt("Ingrese un valor para x");
    y = prompt("Ingrese un valor para y");
}
if(x>0 && y>0){
    alert(`El punto esta ubicado en el primer cuadrante, coordenadas (${x},${y})`)
}
else if(x<0 && y>0){
    alert(`El punto esta ubicado en el segundo cuadrante, coordenadas (${x},${y})`)
}
else if(x<0 && y<0){
    alert(`El punto esta ubicado en el tercer cuadrante, coordenadas (${x},${y})`)
}
else if(x>0 && y<0){
    alert(`El punto esta ubicado en el cuarto cuadrante, coordenadas (${x},${y})`)
}
