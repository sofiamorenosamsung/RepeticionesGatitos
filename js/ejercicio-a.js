console.log('Ejercicio 6-a');
console.log('\nVar cantDeGatos = 10');

var cantDeGatos = 10
for (var gato = 1; gato <= cantDeGatos; gato++) {
  var contador = gato % 3;
  switch (contador) {
    case 0:
      console.log('Gato #' + gato + ': 😺')
      break;

    case 1:
      console.log('Gato #' + gato + ': 😸')
      break;

    case 2:
      console.log('Gato #' + gato + ': 😹')
      break;
  }
}

//Prueba con otra cantidad de var cantDeGatos

console.log('\nPrueba con un valor distinto para cantDeGatos = 6');

var cantDeGatos = 6
for (var gato = 1; gato <= cantDeGatos; gato++) {
  var contador = gato % 3;
  switch (contador) {
    case 0:
      console.log('Gato #' + gato + ': 😺')
      break;

    case 1:
      console.log('Gato #' + gato + ': 😸')
      break;

    case 2:
      console.log('Gato #' + gato + ': 😹')
      break;
  }
}

//Prueba con otra cantidad de var cantDeGatos

console.log('\nOtra prueba con otro valor var cantDeGatos= 5');

var cantDeGatos = 5
for (var gato = 1; gato <= cantDeGatos; gato++) {
  var contador = gato % 3;
  switch (contador) {
    case 0:
      console.log('Gato #' + gato + ': 😺')
      break;

    case 1:
      console.log('Gato #' + gato + ': 😸')
      break;

    case 2:
      console.log('Gato #' + gato + ': 😹')
      break;
  }
}