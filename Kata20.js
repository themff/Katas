/*You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)*/

/* well, dividing the even by 2 the rest should be cero, and dividing the odds by two, the rest should be one.
The thing here is, what about the first  three digits. diferent scenarios. ooo ooe eee eeo */

let integerss = [-38429841,-69128570,170881421,-75004879,-151308969,-19283607,71146051,-30651703,-123727635,-91660429,-87653099,141774173,-29720691,129051745,41419885,115319635,169107241,34781831,-111256861,172920885,95306877];

function findOutlier(integers){
  //your code here
  
  let simples = integers.map(function(x){
      return (x%2)*(x%2);
        })

        let suma= simples[0]+simples[1]+simples[2];
        if(suma==0 || suma==1 || suma ==-1){
      for(var i=0;i<simples.length;i++){
          if(simples[i]==1 || simples[i]==-1){
              return integers[i];
          }
          else{}
      }
      }
      else {
        for(var i=0;i<simples.length;i++){
            if(simples[i]==0){
                return integers[i];

            }
            else{}
        }
  }

}

console.log(findOutlier(integerss));

/*exquisita solución 
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}

