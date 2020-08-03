/*Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example

alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)*/

function alphabetPosition(text) {

    let numeros = "";
    let val=0;
    

    let largo= text.length;
    console.log("largo ",largo);
    let largomenos = largo-1;
    
    

    for(var i=0;i<largo;i++){
        
        val = text.charCodeAt(i);  //charCodeAt (0) me entrega el valor ascII de la poisiciòn cero de lo que hay en el string.
        console.log("intermedio" + val);
        if(val==32){
            console.log()
        }
        

            
             if(val>=65 & val<=90){
                val=val-64;
                console.log("paso por acà"+val);
                val=val+" ";
                numeros=numeros.concat(val);
              }
              else{}
                
            
             if(val>96 & val<=122){
                val=val-96;
                console.log("paso por acà"+val);
                val=val+" ";
                numeros=numeros.concat(val);
              }
              else{}
            
             /*if(val==32||val==46||val==39){
                console.log("paso por acà"+val);
                val="";

              }
              else{}*/
            
            
        console.log("valor de i"+i+"largo"+largo);
        console.log("antes de concat"+val);

        
        /*if (i==largomenos||largo==1){
            numeros=numeros.concat(val);
            
        }
        else if(val){
            val=val+" ";
            numeros=numeros.concat(val);
        
        } 
        else{
            
        }*/

        
    }
    numeros=numeros.slice(0,-1);
    return numeros;
  }

  console.log(alphabetPosition("abc"));




  //SOLUCIONES
/*

let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');

con el join nos ahorrábamos el slice del final. muy inteligente. La solución mas elegante.
*/


  /*

  function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}

*/


/*


function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}

*/



  