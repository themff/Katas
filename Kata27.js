/*Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */

let s="dU";

function accum(s) {
    // your code
    
    let largo = s.length ;
    let primera = "";
    let st =[];
    let l="";
    s=s.split("");

    for(var i=0;i<largo;i++){
        primera = s[i].toUpperCase();
        st.push(primera);
        if(i==0){
        st.push("-");
        }
        for(var a=0;a<i;a++){
            l=s[i].toLowerCase();
            st.push(l);
        }
        if(i != largo - 1 && i !=0 ){
            st.push("-");
        } 
    }
 return st.join("");
}

console.log(accum(s));


/*

function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

*/

/*

El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(function(num) {
    return Math.sqrt(num);
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
Sintaxis

var nuevo_array = arr.map(function callback(currentValue, index, array) {
    // Elemento devuelto de nuevo_array
}[, thisArg])

*/