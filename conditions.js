let takenCSharp = true
let takenJava = false

if (takenCSharp || takenJava) {
    console.log('You meet the pre-requisites for Android')
} else {
    console.log('You must take C# or Java')
}

// to be a senator you must be 30 years old, have been a us citizen for 9 or more years and live in the state you want to represent 

let age = 32
let usCitizenTime = 23
let stateOfResidence = 'Wisconsin'
let stateWantToRepresent = 'Minnesota'

if (age >= 30 && usCitizenTime >= 9 && stateOfResidence === stateWantToRepresent) {
    console.log('You may become a senator! Good luck!')
} else {
    console.log ('You do not meet the requirements. Sorry.')
}