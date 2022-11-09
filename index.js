let number1;
let mark1;
let number2;
function seven(){
   number1 = document.getElementById("getnumber1").innerHTML = 7;        
   console.log(number1);
}
function eight(){
   number2 = document.getElementById("getnumber2").innerHTML = 8;        
   console.log(number2);
}

function plus(){
   document.getElementById("getnumber1").style.right="8%";
   mark1 = document.getElementById("getmark").innerHTML = "+";
           document.getElementById("getmark").style.display="flex";
   
   console.log(mark1);
}


if(number2 >= 0){
   document.getElementById("getnumber1").style.right="12%";
}