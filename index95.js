var i;
var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 10; i++) {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}

//from 85
//var i = 0;
//var j = 1;
//var k;


//do {
  //  console.log(i);
   // k = i + j;
   // i = j;
   // j = k;

 

//} while (i > 60)

