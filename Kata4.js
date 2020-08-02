/*Write a function called repeatString which repeats the given String src exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"*/

let cadena ="";


function repeatStr (n, s){

    for(var i=0;i<n;i++){
        cadena=cadena.concat("",s);

    }


    return cadena;
   
        
      
}

console.log(repeatStr(3,"J"));


/* te caes de orto con la solución  

function repeatStr (n, s) {
  return s.repeat(n);
}

*/