/*Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer */
let val = 9119;

function squareDigits(num){
    //may the code be with you
    let cadena = Array.from(String(num), Number); //convierto el número en array
    let cadena1 = Array.from(cadena,x => x*x); //cada valor del array lo multiplico por si mismo
    
    console.log(cadena);
    console.log(cadena1);
    console.log(cadena1.join(""));  //esto me pega uno a uno los elementos de mi array sin separadores.
    
    let val = parseInt(cadena1.join(""),10); //convierto el array pegado en un entero. 


}

squareDigits(val);


//otras soluciones return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));

//return +num.toString().split('').map(i => i*i).join('');