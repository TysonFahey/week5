// let birds = ['Own', 'Robin', 'Eagle']
// console.log(birds)

// birds.forEach(  function(bird, index){
//     // repeat once for every object in array
//     // the function will be called for each object in the array
//     console.log(index, bird.toUpperCase())
// })


// // traditional for loop
// for (let x = 0 ; x < birds.length ; x++){
//     let bird = birds[x]
//     console.log(bird.toUpperCase())
// }

// // x keeps track of how many times the function will be called to loop through the array. we want to loop until x is no longer smaller than the length of the array. x++ is the same as x = x + 1 



// // while loops

// let maxVal = 100
// let number = 1
// while (number < maxVal){
//     number *= 2
//     console.log('number = ' + number)
// }


// let text = 'Hello World'

// let stringLength = text.length // length is a property

// let shout = text.toUpperCase() // is a method - conver to uppercase

// let whisper = text.toLocaleLowerCase()

// let whereIsW = text.indexOf('w') // index of the first matching character or -1 if not found

// let whereIsZ = text.indexOf('z') // index of first mathing character or -1 if not found

// let whisperAndShout = whisper.concat(shout) // join strings together

// let replace0 = text.replace('o', '0') // replace the first instance of first thing with second thing 

// let replaceAll0 = text.replace(/0/g, '0') // replace all instance of first thing with second thing

// let removeWhiteSpace = text.trim() // removes spaces, tabs, new lines, etc. from both ends of the string

// console.log(stringLength, shout, whisper, whereIsW, whereIsZ, whisperAndShout, replace0, replaceAll0, removeWhiteSpace)



// // behavior replace 

// let text2 = 'The classes are itec 1150, itec 1250, itec 2560'

// let replaced = text2.replace('itec', 'ITEC')
// console.log(replaced) // only replaces the first instance itec to ITEC. need a regex for global replacing as below 

// let replacedAll = text2.replace(/itec/g, 'ITEC')
// console.log(replacedAll)


// // replace any digit that is repeated 4 times with ITEC and teh string that gets matched

// let message2 = 'The classes are 1150, 1250, 2560'
// let replaceRegex = message2.replace(/\d{4}/g, 'ITEC $&')
// console.log(replaceRegex)



// let animals = ['duck', 'bear', 'squirrel']

// console.log(animals)
// console.log(animals[0])

// // modifying index
// let first_animal = animals[0]

// animals[2] = 'mouse'
// console.log(animals)

// // push to add to end // unshift to add to start

// animals.push('elephant') // end
// console.log(animals)
// animals.unshift('cat') // begining
// console.log(animals)

// // remove from beginging // remove from end
// let firstAnimal = animals.shift() // remove from beginging
// console.log(firstAnimal)
// console.log(animals)
// animals.pop()//remove last thing from array 
// let lastAnimal = animals.pop()
// console.log(lastAnimal) // if you want to save the removed item
// console.log(animals)

// animals.reverse() // reverse order
// console.log(animals)
// animals.sort() // alphabetical order
// console.log(animals)

// let numberOfAnimals = animals.length
// console.log(numberOfAnimals)

// console.log(animals.indexOf('duck'))

// if (animals.includes('Cheetah')) {
//     console.log('cheetah is in the array')
// }
// console.log(animals.join (' * '))


// animals.forEach(function(animal){
//     console.log(animal.toUpperCase())
// })

// animals.forEach(function(animal){
//     console.log(animal.length)
// })

// animals.push('alligator')
// let animalNameLength = []
// animals.forEach(function(animal){
//     let length = animal.length
//     animalNameLength.push(length)
// })
// console.log(animalNameLength)

// an object with properties table, chair, couch; values are the color of each
let furniture = {table: 'red', chair: 'blue', couch: 'green'};

//looping over all of the properties

for (let f in furniture) {
    console.log(f); // f is table, chair, couch (the property names)
    console.log(furniture[f])// this is the value for preoperty f
}


// cats_and_owners.forEach(function (petList){
//     console.log(petList.name + " has a cat named " + petList.cat)
// })