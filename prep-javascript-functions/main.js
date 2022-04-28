function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(1, 1);

console.log('addTwoNumbers sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);

console.log('convertHoursToMinutes minutes', minutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}

var greeting = getGreeting('World');

console.log('getGreeting', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var multiply = addAndMultiplyBy5(10, 5);

console.log('addAndMultiplyBy5', multiply);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var divide = multiplyAndDivideBy5(35, 10);

console.log('multiplyAndDivideBy5', divide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtract = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers', subtract);

function getCircleCircumference(radius) {
  return radius * (Math.PI * 2);
}

var circumference = getCircleCircumference(5);
console.log('getCircleCircumference', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Juan', 'Ramirez');
console.log('getFullName', fullName);

function cube(number) {
  return number * number * number;
}

var cubeNumber = cube(5);
console.log('cube', cubeNumber);
