
console.log('Ejercicio-b');

var cantDeGatos = 5
var cantDePasos = 3
var pasoGif = ''

for( var pasos = 1 ; pasos <= cantDePasos; pasos++){
pasoGif += '🐾'
}    

for ( var gato = 1 ; gato <= cantDeGatos; gato++){
console.log('Gato #'+  gato + ': 🐈'+pasoGif)
}

//Prueba con otros valores para variables cantDeGatos y cantDePasos.....

console.log('Prueba con otros valores para variables cantDeGatos y cantDePasos')

var cantDeGatos = 10
var cantDePasos = 4
var pasoGif = ''

for( var pasos = 1 ; pasos <= cantDePasos; pasos++){
pasoGif += '🐾'
}    

for ( var gato = 1 ; gato <= cantDeGatos; gato++){
console.log('Gato #'+  gato + ': 🐈'+pasoGif)
}
