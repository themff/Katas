/*Write a function that takes in a string of one or more words,
 and returns the same string, but with all five or more letter words reversed 
 (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. 
 Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"*/

let str = "Hola pololo";

function spinWords(str){
    
    let array = str.split(" "); //turn the text into a buch of strings separated by spaces
    for (var i=0;i<array.length;i++){ //travel in te length of that new array
        let palabra = array[i];     
        if(palabra.length >= 5){    //if the length of the current word is more or equal to 5
            let split = array[i].split(""); //I separate the word in letters
            let reverse = split.reverse();  //I reverse that array of letters
            let jn = reverse.join(""); //I join newly those letters into a word.
            array[i]=jn;

        }

    }
    return array.join(" "); // I join all the words into a text.
  }

  console.log(spinWords(str));


  /* SOLUCIONES

  function spinWords(string){
  return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}

//elegantisimo el criterio de búsqueda de arriba. me faltaba la , después del 5 para que me busque todas las 
palabras de 5 o mas letras. También super elegante el split reverse join , importante poner antes function(w) para 
después poder pasarlo como parámetro. */