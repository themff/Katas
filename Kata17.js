/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/

let palabras = "Oye como va mi niño, bueno pa bailar, cubana, oye como va, ea"
function findShort(s){
    
 let min = 10000;   
  
let array = s.split(" ");
for(var i=0;i<array.length;i++){
    if(array[i].length<min){
        min=array[i].length;

    }
}

return min;

}

console.log(findShort(palabras));

//SOLUCIONES 
/*

function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }

  Vamos entendiendo como funciona el map. al parecer es una suerte de for que recorre todo el arreglo y "mapea" valga la red
  cierto valor a cierto cálculo. Espléndido.

  