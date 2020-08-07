/*

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !*/
st="Pig Latin is Cool";
function pigIt(str){
    let palabra = [];
    array = str.split(" ");
    for(var i=0;i<array.length;i++){
        if(array[i]=="!" || array[i]=="?"){

        }
        else{

        
        let palabra = array[i].split("");
        let primerLetra = palabra.shift();
        primerLetra=primerLetra+"ay";
        palabra.push(primerLetra);
        array[i]=palabra.join("");;
        }
    }
return array.join(" ");
  }

  console.log(pigIt(st));

  /* function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
} FANTASTICO */