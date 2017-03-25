function modify (data, callback) { // higher-order function taking array and callback fn as arguments.
  var accumulator = [] // creating new array.

  data.forEach(function (item) { // invoking the forEach method passing var item as argument
    accumulator.push(callback(item)) // running the callback function on each array item and filling new array.
  })

  return accumulator // return new array after invoking fn.
}

function increment (num) { // function named 'increment' which takes a var, num, as argument.
  return num + 1 // add one to input and return result.
}

function decrement (num) { // function named 'decrement' which takes a var, num, as an argument.
  return num - 1 // subtract one from input and return result.
}

var numbers = [27, 68, 40, 3, 14, 74] // create array of numbers.

var incremented = modify(numbers, increment) // create new var 'incremented,' defined as an array which will increment the numbers array.

var decremented = modify(numbers, decrement) // create new var 'decremented,' defined as an array which will decrement the numbers array.

console.log(incremented) // outputs incremented array to console.

console.log(decremented) // outputs decremented array to console.

// This exercise is made up of several mini exercises. Each exercise will use the following array of people:
//
// Use map() to get an array of first and last names. EG: ["Finka Takenaka", "Tiriaq Fenstermacher", ...]
// Use map() to create a new array of objects that only contain fullName and age properties. The fullName property should be set to the concatenation of the firstName and lastName properties. EG: [{fullName: "Finka Takenaka", age: 57}, {fillName: "Tiriaq Fenstermacher", age: 46}, ...]
// Use filter() to get an array of all people younger than 50.
// Use reduce() to find the oldest person.
var people = [
  {
    firstName: 'Finka',
    lastName: 'Takenaka',
    age: 57
  },
  {
    firstName: 'Tiriaq',
    lastName: 'Fenstermacher',
    age: 46
  },
  {
    firstName: 'Amel',
    lastName: 'Flipse',
    age: 86
  },
  {
    firstName: 'Clara',
    lastName: 'Schwartz',
    age: 27
  },
  {
    firstName: 'Vivyan',
    lastName: 'Mah',
    age: 35
  }
]

var namesArray = people.map(getFirstAndLastNames)
var namesAgesArray = people.map(getFullNameAndAge)
var youngerThan50Array = people.filter(returnLessThan50YrsOld)
var oldestPerson = people.reduce(getOldestPerson)

console.log(namesArray)
console.log(namesAgesArray)
console.log(youngerThan50Array)
console.log(oldestPerson)

function getFirstAndLastNames (obj) {
  return {fullName: obj.firstName + ' ' + obj.lastName}
}

function getFullNameAndAge (obj) {
  return {fullName: obj.firstName + ' ' + obj.lastName + ', age: ' + obj.age}
}

function returnLessThan50YrsOld (obj) {
  if (obj.age < 50) {
    return obj
  }
}

function getOldestPerson (obj) {
  var oldest = 0
  var oldestPersonObj = ''
  if (obj.age > oldest) {
    oldestPersonObj = obj
  }
  return oldestPersonObj
}
