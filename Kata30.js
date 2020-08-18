/*Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive 
alphabetic characters and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) 
and numeric digits.

Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice */

/*let text = "bacdeefgggh";
let texto = [];
let texto2 = [];

function duplicateCount(text){

    let duplicados =[];
    texto = Array.from(text);
    do while(texto.length != texto2.legth){
    
    texto= texto.sort();
    //texto2 = texto.filter(a => texto[texto.indexOf(a)] == [texto.indexOf(a)+1]);
    texto2 = texto.filter((el, index) => texto[index]== texto[index+1] );
    console.log(texto2);
    texto=texto2;
    }
    
  }

  console.log(duplicateCount(text)); */


  //filtrar y redundar hasta que los largos del array sean iguales


  /* function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
} */