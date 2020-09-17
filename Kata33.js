/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/

let vari = "xxoxo";



function XO(str) {

    largo= str.length
    let counter = 0;
    for(var i=0; i < largo; i++){
        if(str[i]==="x" || str[i]==="X"){
            counter ++;
        } else if (str[i]==="o" || str[i]==="O"){
            counter --;
        } else { 
            console.log("nada");
        } 

    }
        //code here
 

 if( counter == 0){
     return true;
 } else {
     return false;
 }

}
 console.log(XO(vari));



 /* algunas soluciones

 function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}



$$$$$$$$$

const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}