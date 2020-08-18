/*Your goal in this kata is to implement a difference function, 
which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

const a = [1,2,3,4,5,6,7];
const b = [3,5];


function arrayDiff(a, b) {
 
    let salida = [];
    let flag = 0;
    let carac = 0;

    for(var i=0;i<a.length;i++){

        for(var j=0;j<b.length;j++){

            a[i] == b[j] ? flag=1 : flag=flag;
        }
        carac = a[i];
        flag == 0 ? salida.push(carac) : flag = 0 ;

    }

    return salida;


}

console.log(arrayDiff(a,b));


/* function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}

*/
/*
function array_diff(a, b) {
    return a.filter(function(x) { return b.indexOf(x) == -1; });
  }

  */

  /* Explicación del filter.

  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]