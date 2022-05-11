let major = Number (prompt("Ingrese un número mayor a 1000"));
let minor = Number (prompt("Ingrese un número menor a 100"));
alert ("El numero " + minor + " cabe " + Math.floor((major/minor)) + " veces en " + major)