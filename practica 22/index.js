let alumnos = ["Johan","Salomon","Miguel","Augusto","Rene"];

console.log("Lista de Alumnos:", alumnos);

console.log("Numero de Alumnos:", alumnos.length);

alumnos.push("Mia");
console.log("Lista de alunos actualizada", alumnos);
alumnos[6] = "Edwin";
console.log("Lista final de alumnos actualizada", alumnos);

console.log(alumnos[2]);



console.log(alumnos[-3]);
//undefined
alumnos[10] = "Sofia";
console.log("Lista de alumno 10", alumnos);
alumnos.pop();
console.log("Lista de alumnos despues de eliminar el ultimo", alumnos);
alumnos.shift();
console.log( alumnos);

for(let i = 0; i < alumnos.length; i++){
    console.log( alumnos[i]);
}

let numeros = [1,2,3,4,5,6,7,8,9,10];
console.log (numeros[5]);

alumnos.join(" * ");

let listaAlumnos = document.getElementById("listaAlumnos");
listaAlumnos.innerHTML = alumnos.join(" - ");