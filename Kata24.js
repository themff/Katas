/*Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.*/



function human(seconds){
var segundos=seconds %60;
var minutos = ((seconds - segundos)/60)%60;
var horas= (((seconds - segundos)/60)-minutos)/60;
console.log(seconds);
console.log(minutos);
console.log(segundos);
console.log(horas);
if(horas<10){horas="0"+horas;}
if(minutos<10){minutos="0"+minutos;}
if(segundos<10){segundos="0"+segundos;}
if(horas==0){horas="00";}
if(segundos==0){segundos="00";}
if(minutos==0){minutos="00";}
return horas+":"+minutos+":"+segundos;
}

console.log(human(5));


/* Buena solución pasar el número a entero y dejar de lado lo que sobra 

function humanReadable(seconds) {
var hours = parseInt( seconds / 3600 ) ;
var minutes = parseInt( seconds / 60 ) % 60;
var seconds = seconds % 60;

var pad = function(val){
  return val < 10 ?"0"+val:val;
}

return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
}

*/