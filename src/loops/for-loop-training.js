// for (initialisation; condition; finalisation) {}
const list = ['Audi', 'BMW', 'Mercedes']

for (i = 0; i < list.length; i++) {
  // run this block of code in the loop
  if (list[i] === 'BMW') {
    console.log(list[i])
  }
}

const shoppingList = ['Milk', 'Eggs', 'Bread', 'Sugar', 'Coffee']

// 1. Replace CONDITION with a condition that is true while i is less than the length of the shopping list
for (let i = 0; i < shoppingList.length; i++) {
  // 2. Console log the value of i, save the file and run it to see what your loop does
  console.log(i)
}

console.log('\n', 'Exercise 3')
// 3. Using the above loop as a reference (don't copy and paste), create a for loop that console logs each item in the shopping list
for (i = 0; i < shoppingList.length; i++) {
  console.log(shoppingList[i])
}

console.log('\n', 'Exercise 4')
// 4. Create a for loop that console logs an item in the shopping list if it's Eggs
for (i = 0; i < shoppingList.length; i++) {
  if (shoppingList[i] === 'Eggs') {
    console.log(shoppingList[i])
  }
}

console.log('\n', 'Exercise 5')
// 5. Create a for loop that console logs an item in the shopping list if it is not Eggs
for (i = 0; i < shoppingList.length; i++) {
  if (shoppingList[i] !== 'Eggs') {
    console.log(shoppingList[i])
  }
}

console.log('\n', 'Exercise 6')
// 6. Create a for loop that console logs "I found Sugar" if the shopping list contains Sugar
for (i = 0; i < shoppingList.length; i++) {
  if (shoppingList[i] === 'Sugar') {
    console.log('I found Sugar')
  }
}

console.log('\n', 'Exercise 7')
// 7. Create a for loop that starts at the end of the shopping list and runs to the beginning,
// console log each item
for (i = shoppingList.length - 1; i >= 0; i--) {
  console.log(shoppingList[i])
}

console.log('\n', 'Exercise 8')
// 8. Create a for loop that console logs "I found Tea" if the shopping list contains Tea,
// otherwise console log "I don't need Tea". The log should only run once the loop has finished;
// use a variable to keep track of whether you've found Tea in the shopping list
let teaFound
for (i = 0; i < shoppingList.length; i++) {
  if (shoppingList[i] === 'Tea') {
    teaFound = true
  }
}
if (teaFound === true) {
  console.log('I found Tea')
} else {
  console.log("I don't need Tea")
}
