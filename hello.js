console.log("Hello World!");

// 3 ways to create vars

let color = 'blue'
var size = 'medium' // able to change/modify. not recommended
const language = 'javaScript'


let quantity = 5
let distance = 4.5

let text = 'Hello World'
let message = 'Hi Programmers'

console.log('There are ' + quantity + ' programers')

let todayTemp = 75

console.log("Today's temperature is " + todayTemp + "F")

let tempC = (todayTemp - 32) * 5 / 9
console.log("Today's temperature is " + tempC.toFixed(2) + 'C')
console.log(`Toda's temperature is ${tempC.toFixed(2)} aka ${todayTemp}F`)


let className = 'Web Programming'
let classCode = 2568 
let department = 'ITEC'

console.log(`This class is ${department} ${classCode} ${className}`)