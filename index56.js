function oddOrEven(x) {
    return ( x & 1 ) ? "odd" : "even";
  } 
  
  //from stackoverflow answer
  
  function checkNumber(argNumber) {
    document.getElementById("result").innerHTML = "Number " + argNumber + " is " + oddOrEven(argNumber);
  }
   
  checkNumber(5);