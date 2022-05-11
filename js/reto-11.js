let major = Number (prompt("Ingrese un número mayor a 1000"));
let minor = Number (prompt("Ingrese un número menor a 100"));
alert ("El numero " + minor + " cabe " + (major/minor - (major%minor)) + " veces en " + major)