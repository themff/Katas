/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    var vowelsCount = 0;
    let caracter=0; 
    
   //ASCII de vocales 
   /* 
    a=97
    e=101
    i=105
    o=111
    u=117
    */

    for(var i=0;i<str.length;i++){
        caracter= str.charCodeAt(i);
        if(caracter==97||caracter==101||caracter==105||caracter==111||caracter==117){
            vowelsCount++;
        }
    }
    
    return vowelsCount;
  }


  /* la solución es brillante

  function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
