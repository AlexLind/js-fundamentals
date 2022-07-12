// 1a. Complete the function declaration below by making it
// console log "Hello, world!". Don't return a value.
function sayHello() {
  console.log('Hello, World!')
}

// 1b. Call your function below this comment
sayHello()

// 2a. Create a function called sayGoodbye that returns "Goodbye, world!"

function sayGoodbye() {
  return 'Goodbye World'
}

// 2b. Call your sayGoodbye function and save what it returns into a
// variable called goodbyeMessage

const goodByeMessage = sayGoodbye()

// 2c. Console log your goodbyeMessage variable

console.log(goodByeMessage)

// 3a. Create a function called sayMessage that accepts one input
// parameter called name. Make the function return a string that says
// "Hello NAME", but replace NAME with the value of the name parameter

function sayMessage(name) {
  return 'Hello ' + name
}

// 3b. Call your sayMessage function, giving it a value to use for the
// name parameter, and save what it returns into a variable called myMessage

myMessage = sayMessage('Alex')

// 3c. Console log your myMessage variable

console.log(myMessage)

// 4a. Create a function called subtract that accepts two input parameters
// called num1 and num2. Make the function subtract num2 from num1 and return the result.

function subtract(num1, num2) {
  return num1 - num2
}

// 4b. Call your subtract function and save what it returns into a variable;
// do this 3 times with different input parameters

subtractResult1 = subtract(5, 3)
subtractResult2 = subtract(6, 2)
subtractResult3 = subtract(10, 15)

// 4c. Console log the 3 variables you created

console.log(subtractResult1)
console.log(subtractResult2)
console.log(subtractResult3)

// 5a. Create a function that accepts one input parameter called bool.
// Make your function change the isComplete variable below to whatever
// value is provided to the bool parameter.
// If anything except true or false is provided to the bool parameter,
// console log out "Invalid value provided" without changing the isComplete variable
// You can name your function whatever you think makes sense
let isComplete = false
function switchBool(bool) {
  if (typeof bool !== 'boolean') {
    console.log('Invalid value provided')
  } else {
    isComplete = bool
  }
}

// 5b. To test your work, call your function 3 times;
// Once with true provided to your parameter
// Once with false provided to your parameter
// Once with any other value provided to your parameter
console.log(switchBool(true))
console.log(switchBool(false))
console.log(switchBool('Hello Nathan'))
