/*Write a function, persistence, that takes in a positive parameter
 num and returns its multiplicative persistence, which is the number 
 of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number */

 let num = 39;

 function persistence(num) {
    let arr1 = num.toString();
    
    let valor= 0;
    arr1= Array.from(arr1);
    let mult=1;
    let conta=0;
    //arr1.length == 1 ? return 0 : console.log("no es cero");
    if(arr1.length ==1 ){
        return valor ;
    }

    let largo = arr1.length;

   do { 
    for(var i=0;i<arr1.length;i++){
        mult= mult* arr1[i];
    }
    conta++;
    valor=conta;
    arr1=mult ; 
    mult=1;
    arr1= arr1.toString();
    arr1= Array.from(arr1);
    //console.log(mult.lenth);

    } while (arr1.length !=1);







    return valor; 

 }

 console.log(persistence(num));

 /* la solución estuvo bastante cerca. cambia el for por un reduce

 function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}

*/