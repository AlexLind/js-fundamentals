// 1. Create a function named add that accepts two parameters:
// - num1, a number
// - num2, a number
// The function must add the two parameters together and return
// the result

function add(num1, num2) {
  console.log('Add function called')
  return num1 + num2
}

// 2. Create a function named subtract that accepts two parameters:
// - num1, a number
// - num2, a number
// The function must subtract num2 from num1 and return the result

function subtract(num1, num2) {
  console.log('Subtract function called')
  return num1 - num2
}

// 3. Create a function named calculator that accepts three parameters:
// - num1, a number
// - num2, a number
// - operation, a function that performs some calculation
// The calculator function must return the result of passing num1 and num2
// into the operation function

function calculator(num1, num2, operation) {
  return operation(num1, num2)
}

// 4. Call your calculator function twice, give the operation
// parameter your add function in the first call and your
// subtract function in the second

console.log(calculator(1, 2, add))
console.log(calculator(1, 2, subtract))

// 5. Create functions named multiply, divide and remainderOf
// Test your calculator function, passing in these new functions
// as callbacks

function multiply(num1, num2) {
  console.log('Multiply function called')
  return num1 * num2
}

function divide(num1, num2) {
  console.log('Divide function called')
  return num1 / num2
}

function remainderOf(num1, num2) {
  console.log('Remainder function called')
  return num1 % num2
}

console.log(calculator(1, 2, multiply))
console.log(calculator(1, 2, divide))
console.log(calculator(1, 2, remainderOf))

// 6. Create functions named lessThan, moreThan and equalTo, which
// all return a boolean. Pass these as callbacks into your
// calculator function

function lessThan(num1, num2) {
  console.log('Less than function called')
  return num1 < num2
}

function moreThan(num1, num2) {
  console.log('More than function called')
  return num1 > num2
}

function equalTo(num1, num2) {
  console.log('Equal to function called')
  return num1 === num2
}

console.log(calculator(1, 2, lessThan))
console.log(calculator(1, 2, moreThan))
console.log(calculator(1, 2, equalTo))
