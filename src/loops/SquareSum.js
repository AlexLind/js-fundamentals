// Create a function that takes in an array of numbers and returns the sum of its squares.

function squareSum(numbers) {
  let sum = 0

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 2
  }

  return sum
}

console.log(squareSum([1, 2, 2]))
