"use strict";
let estudiantes = [];
function agregar(nombre, nota) {
    nombre = nombre.trim();
    if (nombre === "") {
        console.log("Escribe un nombre");
        return;
    }
    if (isNaN(nota) || nota < 0 || nota > 20) {
        console.log("Nota invalida para " + nombre + " : debe estar entre 0 y 20");
        return;
    }
    estudiantes.push({ nombre: nombre, nota: nota });
}
function promedio() {
    if (estudiantes.length === 0) {
        return 0;
    }
    let suma = 0;
    for (let e of estudiantes) {
        suma = suma + e.nota;
    }
    return suma / estudiantes.length;
}
function maxnota() {
    let notas = estudiantes.map(e => e.nota);
    return Math.max(...notas);
}
agregar("Ana", 15);
agregar("Luis", 22);
agregar("", 10);
agregar("Marta", 18);
agregar("Pedro", 9);
console.table(estudiantes);
console.log("Promedio: " + promedio().toFixed(2));
console.log("Nota mas alta: " + maxnota());
