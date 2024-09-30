function isGpaScore(gpa) {
    if (gpa >= 0 && gpa <= 4){
        return true
    } else {
        return false
    }
}

console.log(isGpaScore(4))
console.log(isGpaScore(8))
console.log(isGpaScore(2.5))


// easier way to write it 
function validGPA(gpa) {
    return gpa >= 0 && gpa <= 4
}


console.log(validGPA(4))


function cityStateAddress(city, state) {
    let address = city + ', ' + state.toUpperCase() // mn -> MN
    return address
}

// let address = `${city}, ${state.toUpperCase()}` dont need the plus sign when template literal (uses backticks not apostrophes )

console.log(cityStateAddress('minneapolis', 'mn'))