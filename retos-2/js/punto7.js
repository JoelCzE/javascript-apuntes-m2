let cant_quest = Number (prompt("¿Cuántas preguntas hay?"));
let correct_q = Number (prompt("¿Cuántas preguntas correctas respondió?"));
let percent = (correct_q/cant_quest) *100;
if (percent >= 90){
    var msj = "Nivel máximo"
}
else if(75<=percent && percent<90){
    var msj = "Nivel medio"
}
else if(50>=percent && percent<75){
    var msj = "Nivel regular"
}
else if(0<=percent && percent<50){
    var msj = "Fuera de nivel"
}
else{
    var msj = "Error!"
}
alert(`%${percent} de respuestas contestadas correctamente. Alcanzó el...\n\n -${msj}`);