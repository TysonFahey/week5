// create object that contains properties
// propities are name: value pairs

let user = { username: 'Tyson', password: 'Kittens'}

console.log(user.username) // Zoe
console.log(user['username']) // Zoe

console.log(user['password'])

let whatProperty = 'password'
console.log(user[whatProperty])

let usernameProperty = 'username'
console.log(user.username)

user.email = 'tysonfahey@fsda.com'
console.log(user.email)