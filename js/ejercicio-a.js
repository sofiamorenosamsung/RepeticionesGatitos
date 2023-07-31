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
