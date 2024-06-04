//Create a function to calculate Average to a group of numbers (at least 10 numbers)
var numbers = [13, 40, 2, 33, 95, 58, 67, 39, 12, 45];

var sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

var average = sum / numbers.length;
console.log(average); 