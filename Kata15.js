/*Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.

Good luck :)*/

function longest(str) {
    
    //let Arr = Array.from(str);
    let Las = "";
    let max = 0;
    let MAXIMO = 0;
    let LASMAX = "";

    for(var i = 0;i<str.length;i++){
        let mas = str.charCodeAt(i+1)
        let ini = str.charCodeAt(i)
        if(ini<=mas ){
            Las=Las+str[i];
            max=Las.length;
            
        }
        else{
            Las=Las+str[i];
            max=Las.length;
            if(max>MAXIMO){
                MAXIMO=max;
                LASMAX=Las; //guardo el valor de Las en otra variable para pode resetearlo.
                Las="";
            }
            else{
                Las="";
            }
             
        }
    }

    return LASMAX;

  }

  console.log(longest("abdfaaaabbbbcttavvfffffdf"))

  //SOLUCION 
  
  longest = s => s.match(/a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*/g).reduce((a, b) => a.length >= b.length ? a : b);