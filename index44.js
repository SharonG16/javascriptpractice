var text = 'HELLO';
var firstChar = text.charAt(4);
var secondChar = text.charAt(3);
var thirdChar = text.charAt(2);
var fourthChar = text.charAt(1);
var fifthChar = text.charAt(0);
var res = firstChar.toLowerCase().concat(secondChar.toLowerCase(), thirdChar.toLowerCase(), fourthChar.toLowerCase(), fifthChar.toLowerCase());

console.log(`The final result is: ${res}`);
