const nums = [1, 3, 12, 5, 1, 6, 4, 1, 10]
const letters = ['H', 'e', 'l', 'l', 'o']
let sum = 0
let word = ''

// TODO: Add code below this line to make the tests pass

// Use a for loop to set the sum variable to the sum of all the values in nums

// sum = 0
// for (i = 0; i < nums.length; i++) {
//   sum += nums[i]
// }
// console.log(sum)

nums.forEach(item => {
  sum += item;
})
console.log(sum)

// Use a for loop to populate doubledNums with every value from nums array doubled (i.e [2, 6, 24, etc...])
const doubledNums = []

// for (i = 0; i < nums.length; i++) {
//   doubledNums.push(nums[i] * 2)
// }

nums.forEach(item => {
  doubledNums.push(item * 2)
})
console.log(doubledNums)

// Use a for loop to set word equal to all the letters in the letters array

// for (i = 0; i < letters.length; i++) {
//   word += letters[i]
// }
letters.forEach(item => {
  word += item
})
console.log(word)
// Use a for loop to populate everySecondNum with every second number from the nums array
const everySecondNum = []

// for (i = 1; i < nums.length; i = i + 2) {
//   everySecondNum.push(nums[i])
// }


nums.filter((item, i) => {
 if (i % 2 === 2 - 1) {
  everySecondNum.push(item)
 }
})
console.log(everySecondNum)

// Use a for loop to populate numsReversed with the numbers from nums in reverse order

// const numsReversed = []
// for (i = nums.length - 1; i >= 0; i--) {
//   numsReversed.push(nums[i])
// }

const numsReversed = nums.reverse()

console.log(numsReversed)
// do not change below this line
module.exports = {
  a: sum,
  b: doubledNums,
  c: word,
  d: everySecondNum,
  e: numsReversed
}
