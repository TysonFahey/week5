function shout(text) {
    let shouty_text = text.toUpperCase() + "!!!"
    return shouty_text
}

console.log(shout('hello world'))

let message = shout('hello web programmers')
console.log(message)

function f_to_c(f, decimalPlaces) {
    let celsius = (f - 32) * 5 / 9
    if (decimalPlaces) { 
        return celsius.toFixed(decimalPlaces)
    } else {
        return celsius
    }
    
}

let todayTemp = 75
todayCelsius = f_to_c(todayTemp, 2)
console.log(todayCelsius)