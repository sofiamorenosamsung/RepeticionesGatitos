
console.log('\nEjercicio 6-c');
var cantDeGatos = 15
var cantDePasos = 3
var pasoGif = ''
var gatoGif = '🐈'

for (var pasos = 1; pasos <= cantDePasos; pasos++) {
    pasoGif += '🐾'
}

for (var gato = 1; gato <= cantDeGatos; gato++) {
    (gato % 2 == 0 ? gatoGif = '🐈⬛' : gatoGif = '🐈')
    console.log('Gato #' + gato + ': ' + gatoGif + pasoGif);
}

//Prueba con otros valores de cantDeGatos y cantDePasos----

console.log('\nPrueba con otros valores de cantDeGatos y cantDePasos');

var cantDeGatos = 10
var cantDePasos = 4
var pasoGif = ''
var gatoGif = '🐈'

for (var pasos = 1; pasos <= cantDePasos; pasos++) {
    pasoGif += '🐾'
}

for (var gato = 1; gato <= cantDeGatos; gato++) {
    (gato % 2 == 0 ? gatoGif = '🐈⬛' : gatoGif = '🐈')
    console.log('Gato #' + gato + ': ' + gatoGif + pasoGif);
}