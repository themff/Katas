/*Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

    function functionn(n) {
    let counta=0;
    let bin=(n).toString(2);
    for(var i=0;i<bin.length;i++){
       if(bin[i]==1){
           counta++;
       }
   }
   return counta;
  }

  console.log(functionn(254));


  // SOLUCION . ESPECTACULAR
  /*
  countBits = n => n.toString(2).split('0').join('').length;
  */