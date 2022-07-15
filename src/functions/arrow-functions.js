const numbers = [19, 83, 291, 57, 3014, 69, 42, 670, 15]

// 1. Use .forEach and an arrow function to console log
// each item in the numbers array

numbers.forEach((item) => console.log(item))

// 2. Use .filter and an arrow function to create a new array
// based on the numbers array, but only containing numbers less than
// three digits long

const shortNumbers = numbers.filter((number) => number.toString().length < 3)
console.log(shortNumbers)

// 3. Use .find and an arrow function to get the first
// even number in the array

const evenNumber = numbers.find((number) => number % 2 === 0)
console.log(evenNumber)

// 4. Use .map and an arrow function to create a new array based
// on the numbers array, but each element should be halved

const halvedNumbers = numbers.map((number) => number * 0.5)
console.log(halvedNumbers)

// 5. Use .forEach and an arrow function to double every number in the
// numbers array. Modify the original array, don't create a new one

numbers.forEach((number, i) => (numbers[i] *= 2))
console.log(numbers)
