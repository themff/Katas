/*Write a function called that takes a string of parentheses, and determines if the order 
of the parentheses is valid. The function should return true if the string is valid, 
nd false if it's invalid.

Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true*/



    /*if(parens.length%2==1){
        return false;
    }
    let mitad = parens.length/2;

    let amitad=parens.slice(0,mitad);
    let bmitad=parens.slice(mitad,parens.length);


    for(var i=0;i<mitad;i++){
        if(amitad[i]==bmitad[i]){
            return false;
        }
    }
    return true;
}*/
    
    
   /* let paren=Array.from(parens);
    let invertido=paren.reverse();
    let original=Array.from(parens);
    if(invertido==original){
        return true;
    }
    return false;

  }*/

  function validParentheses(parens){

    //BALANCE DE CARTAS!! pero tengo este problema ((    ) ( ( )    )) -

    let cartas=0;
    for(var i=0;i<parens.length;i++){
        if(parens[i]==="("){
            cartas++;
        }
        
    
    
    if(cartas<0){
        return false;
    }
    }
    return cartas==0;;
}

  console.log(validParentheses("()"));

  /*function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}
*/
