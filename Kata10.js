/*#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
(Use the English alphabet with 26 letters!)
*/
let array = ["a","b","d","e"];


function findMissingLetter(array){

array=array.join("");
let largo=array.length;
let code0=0;
let code1=0;
let resta=0;
let imas=0;
let caracter=0;

    code0= array.charCodeAt(0);

    for(var i=0;i<largo;i++){
    code0 = array.charCodeAt(i);
    imas=i+1;
    code1 = array.charCodeAt(imas);
    resta = code1-code0;
    if(resta>1){
        caracter = code0+1;
    }
    else{}

    }


  return String.fromCharCode(caracter);
}

console.log(findMissingLetter(array));

//La solución es muy similar.