/*You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"*/

let s=["Peter","mike","delta"];

function likes(snames) {
    if(snames==""){
        return "no one likes this";
    }
    else{

       if(snames.length>=4){
           return snames[0]+", "+snames[1]+" and "+(snames.length -2)+ " others like this";
       }
       else if(snames.length==3){
           return snames[0]+", "+snames[1]+" and "+snames[2]+" like this";
       }
       else if(snames.length==2){
           return snames[0]+" and "+snames[1]+" like this";
       }
       else if(snames.length==1){
           return snames[0]+" likes this";
       }


    }
  }
  console.log(likes(s));


  /* por qué no usaste switch???

  function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

*/