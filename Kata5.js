/*You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is positive.

Examples:

findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect*/


function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwis

   if (Number.isInteger(Math.sqrt(sq))){
       while(1==1){
           sq=sq+1;
           if (Number.isInteger(Math.sqrt(sq))){
               return sq;
           }
       }

   }

   else{
        return -1;
        
    }
   
    
  }

  console.log(findNextSquare(81));


  /*Para la respuesta no habìa que jugar con los nùmeros, habìa que jugar con las bases. osea 121 es 11 de base. 144 es 12.

  el prox nùmero va a tener base 13, habìa que hacer la raiz del numero que nos daban, sumarle uno y multimplicarlo por si mismo.

  function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);  Math.pow(5,2) me hace 5 elevado al cuadrado.

  */
