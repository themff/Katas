/*Write an algorithm that takes an array and moves all of the zeros to the end,
 preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/



let arr = [false,1,0,1,2,0,1,3,"a"];

var moveZeros = function (arr) {
let cero=0;
for(var i=0;i<arr.length;i++){
    if(arr[i]===0){
        cero++;
    }
}

let arr1=arr.filter(palabra => palabra!==0);
for(var i=0;i<cero;i++){
    arr1.push(0);
}

return arr1;
}

console.log(moveZeros(arr));


/* Un espectáculo la solución

var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num){return num !== 0;});
  var zeroList = arr.filter(function (num){return num === 0;});
  return filtedList.concat(zeroList);


  */