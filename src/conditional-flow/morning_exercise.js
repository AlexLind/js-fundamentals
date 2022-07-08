/* eslint-disable prettier/prettier */
const beverage1 = 'Ice Water'

// 1. Use a condition to set isRefreshing to true if beverage1 is Ice Water
// console.log("1. Condition test:", 0 < 1) // test your condition here by replacing 0 < 1
//
if (beverage1 === 'Ice Water') {
  const isRefreshing = true
  console.log('isRefreshing is:', isRefreshing)
}

const beverage2 = 'Double Cream'

// 2. Use a condition to set isHealthy to true if beverage2 is not Double Cream
let isHealthy

if (beverage2 !== 'Double Cream') {
  const isHealthy = true
}
console.log('isHealthy is:', isHealthy)

const beverage3 = 'Orange Juice'

// 3. Use a condition to set isEnergizing to true if beverage3 is Coffee,
// otherwise set it to false
let isEnergizing
if (beverage3 === 'Coffee') {
  isEnergizing = true
} else {
  isEnergizing = false
}
console.log('isEnergizing is:', isEnergizing)

const beverage4 = 'Tea'

// 4. Use a condition to set isHot to true if beverage4 is Coffee or Tea
let isHot

if (beverage4 === 'Coffee' ||beverage4 === 'Tea') {
  isHot = true
}
console.log('isHot is:', isHot)

const beverage5 = 'Pepsi'

// 5. Use a condition to set isSugary to true if beverage5 is Pepsi and 5 characters long
let isSugary

if (beverage5 === 'Pepsi' && beverage5.length === 5) {
  isSugary = true
}
console.log('isSugary is:', isSugary)

const beverage6 = 'Milk'

// 6. Use a condition to set isSustainable to true if beverage6 is not Milk or Cream,
// otherwise set it to false
let isSustainable
if (beverage6 !== 'Milk' || 'Cream') {
  isSustainable = true
} else {
  isSustainable = false
}
console.log('isSustainable is:', isSustainable)

const beverage7 = 'Peanut Juice'

// 7. Use a condition to set isDisgusting to true if beverage7 is Diesel or Peanut Juice,
// and is more than 4 characters in length. Otherwise, set it to false
let isDisgusting
if (beverage7 === 'Diesel' || beverage7 ==='Peanut Juice' && beverage7.length > 4) {
  isDisgusting = true
} else {
  isDisgusting = false
}
console.log('isDisgusting is:', isDisgusting)
