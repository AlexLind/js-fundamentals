let knightIsAwake = true
function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake
}
console.log(canExecuteFastAttack(knightIsAwake))
// => false

knightIsAwake = false
let archerIsAwake = true
let prisonerIsAwake = false
function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if (knightIsAwake || archerIsAwake || prisonerIsAwake) {
    return true
  } else {
    return false
  }
}
console.log(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake))
// => true

archerIsAwake = false
prisonerIsAwake = true
function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (!archerIsAwake && prisonerIsAwake) {
    return true
  } else {
    return false
  }
}
console.log(canSignalPrisoner(archerIsAwake, prisonerIsAwake))
// => true
knightIsAwake = false
archerIsAwake = true
prisonerIsAwake = false
petDogIsPresent = false
function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  if (!archerIsAwake && petDogIsPresent) {
    return true
  } else if (prisonerIsAwake && !archerIsAwake && !knightIsAwake) {
    return true
  } else {
    return false
  }
}
console.log(
  canFreePrisoner(
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent
  )
)
// => false
