/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.*/

let arr = [3,4,5,2,6];


function sumTwoSmallestNumbers(numbers) {  
    
    /*var min = Math.min.apply(0, numbers);
    numbers=numbers.copyWithin(min);
    var min2 = Math.min.apply(min, numbers);
    var sum = min+min2;*/

    var min=Number.MAX_VALUE;
    var min2=Number.MAX_VALUE;
    var imin=0;
    largo=numbers.length;

    for(var i=0;i<largo;i++){
        if(numbers[i]<min){
            min=numbers[i];
            imin=i;         //me guardo la posición de i del menor valor.
        }
        else{}
    }
    
    let arr1=numbers.slice(0,imin);
    imin++;

    let arr2=numbers.slice(imin,largo+1);
    numbers=arr1.concat(arr2);
    
    largo--
    for(var i=0;i<largo;i++){
        if(numbers[i]<min2){
            min2=numbers[i];
            //imin=i;         //me guardo la posición de i del menor valor.
        }
        else{}
    }

    sum=min+min2;

    return sum;
  }

  console.log(sumTwoSmallestNumbers(arr));


  //LA SOLUCION ES EXQUISITA, HAY QUE PENSAR FUERA DE LA CAJA

  /*

  function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};

*/ /*Es fantàstico, el tipo los ordena, toma los dos primeros mas chicos, los suma y los devuelve. un genio.*/