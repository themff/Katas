/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.*/

function highAndLow(numbers){
    var max=0;
    var min=0;
    var val=0;

    let array=numbers.split(" "); //convierto la cadena en un array, separa cada vez que lee un " "
    array=array.map(Number);    //mapeo el array para que sean numeros.

    let largo=array.length;
    console.log(array);
    console.log(largo);
    max=array[0];
    min=array[0];

    for(var i=0;i<largo;i++){
        val=array[i];
        console.log("Valor de i "+array[i])
        console.log("Valor de max "+ max);
        if(max<val){
            console.log(array[i])
            max=val;
            console.log(max);
        }
        else{
            if(min>val){
                min=val;
            }
            else{

            }

        }

    }
    array=[max,min];
    array=array.join(" ");


    return array;
  }

  console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));


  /*LA MEJOR SOLUCION

  function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}
*/