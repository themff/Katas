/*Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge. 
Don't forget the space after the closing parentheses!*/

function createPhoneNumber(numbers){

return "("+numbers[0]+numbers[1]+numbers[2]+") "
+numbers[3]+numbers[4]+numbers[5]+"-"
+numbers[6]+numbers[7]+numbers[8]+numbers[9];


}

/* LOCO ME VUELVO

function createPhoneNumber(numbers){
  numbers = numbers.join('');  //convierte el array en un string
  return '(' + numbers.substring(0, 3) + ') '   //del cero al 3 no include
      + numbers.substring(3, 6)                 //del 3 al 6 no include
      + '-' 
      + numbers.substring(6);                   // 6 7 8 y 9 , FANTASTICO
}