var firstNumber = 5;
var secondNumber = 10;

if (firstNumber === secondNumber) {
    result = 'They are the same number.'
} else if (firstNumber > secondNumber) {
    result = `${firstNumber} is bigger than ${secondNumber}.`;
} else {
    result = `${secondNumber} is bigger than ${firstNumber}.`
}

console.log(result);