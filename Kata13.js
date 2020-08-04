// una buena forma de escribir el if

/*function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}

*/
/*Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

Examples

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

function digital_root(n) {

    let sum=10;
    let sumafinal=0;
    
   let array = Array.from(String(n), Number);  //importante, String(n) me genera un string del numero. Y array.from(el string,number)me hace un string con formato de numeros
    while(sum>=10){
        sum=0;
        for(var i=0;i<array.length;i++){
            sum=sum+array[i];
            
            }
                    if(sum<10){
                        sumafinal=sum;
                    }
                    else{
                    n=sum;
                    array = Array.from(String(n), Number);
                    }
                }                

    return sumafinal;

  }

  console.log(digital_root(942));