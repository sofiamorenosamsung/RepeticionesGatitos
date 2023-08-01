console.log('Ejercicio 06-a');
console.log('Var cantDeGatos =10');

 var cantDeGatos=10
for ( var gato = 1 ; gato<= cantDeGatos; gato++){
var contador = gato% 3 ;
switch(contador){
    case 0: 
     console.log ('Gato '+'#'+ gato +'😺')
    break;
    
    case 1:
       console.log ('Gato '+'#'+ gato +'😸')
        break;

    case 2 : 
      console.log('Gato '+'#'+ gato +'😹')
        break;
}
} 

//Prueba con otra cantidad de var cantDeGatos

console.log('Prueba con un valor distinto para cantDeGatos = 6');

var cantDeGatos=6
for ( var gato = 1 ; gato<= cantDeGatos; gato++){
var contador = gato% 3 ;
switch(contador){
    case 0: 
     console.log ('Gato '+'#'+ gato +'😺')
    break;
    
    case 1:
       console.log ('Gato '+'#'+ gato +'😸')
        break;

    case 2 : 
      console.log('Gato '+'#'+ gato +'😹')
        break;
}
}

//Prueba con otra cantidad de var cantDeGatos

console.log('Otra prueba con otro valor var cantDeGatos= 5');

var cantDeGatos=7
for ( var gato = 1 ; gato<= cantDeGatos; gato++){
var contador = gato% 3 ;
switch(contador){
    case 0: 
     console.log ('Gato '+'#'+ gato +'😺')
    break;
    
    case 1:
       console.log ('Gato '+'#'+ gato +'😸')
        break;

    case 2 : 
      console.log('Gato '+'#'+ gato +'😹')
        break;
}
}