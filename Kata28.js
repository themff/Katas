/*

Your task is to make a function that can take any non-negative integer as a argument
 and return it with its digits in descending order. Essentially,
  rearrange the digits to create the highest possible number.

Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/
let n= 42145;

function descendingOrder(n){
    //...

    let num=0;
     //n=Array.from(n);

    num= n.toString().split("").sort().reverse().join("");
    return Number(num);
  }

  console.log(descendingOrder(n));


  /*function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}*/