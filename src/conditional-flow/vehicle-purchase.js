let kind
function needsLicense(kind) {
  if (kind === 'car' || kind === 'truck') {
    return true
  } else {
    return false
  }
}
kind = 'car'
console.log(needsLicense(kind))
// => true
kind = 'bike'
console.log(needsLicense(kind))
// => false

let option1
let option2

option1 = 'Wuling Hongguang'
option2 = 'Toyota Corolla'
function chooseVehicle(option1, option2) {
  if (option1.localeCompare(option2) === -1) {
    console.log(option1 + ' is clearly the better choice')
  } else if (option1.localeCompare(option2) === 1) {
    console.log(option2 + ' is clearly the better choice')
  }
}

console.log(chooseVehicle(option1, option2))
// =>  'Toyota Corolla is clearly the better choice.'
option1 = 'Volkswagen Beetle'
option2 = 'Volkswagen Golf'

console.log(chooseVehicle(option1, option2))
// =>  'Volkswagen Beetle is clearly the better choice.'

function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice * 0.8
  } else if (age >= 10) {
    return originalPrice * 0.5
  } else if (age >= 3 && age < 10) {
    return originalPrice * 0.7
  }
}

console.log(calculateResellPrice(1000, 1))
// => 800

console.log(calculateResellPrice(1000, 5))
// => 700

console.log(calculateResellPrice(1000, 15))
// => 500
