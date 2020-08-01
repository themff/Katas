/*Write function parseFloat (for Javascript parseF) which takes a string and returns a number or Nothing 
(for Python None, for Javascript null) if conversion is not possible.*/

let a="d.5";
console.log(a);


function parseF(s){

    let val= parseFloat(s);
    console.log("pase")
    if(isNaN(val)){             //con isNaN chequeo si la función da nan . 
        return null;
    }

    return val;


}

console.log(parseF(a));


//otras soluciones 
/*function parseF(s) {
  const f = parseFloat(s)
  return isNaN(f) ? null : f  //aca pregunto si f dio nan, si da nan devuelvo null, sino devuelvo f. excelente.
}*/