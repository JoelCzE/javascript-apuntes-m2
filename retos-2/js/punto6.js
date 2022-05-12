let num = prompt("Ingrese un numero de hasta 3 cifras");
let digits = "";
for (var i = 0; i < num.length; i++) {
      if (i>2){
          digits="Error!";
      }
}
alert(`${num}, tiene ${i} cifra/s... ${digits}`);