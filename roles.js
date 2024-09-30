let user = {
    name: 'Tyson',
    email: 'TysonFahey@outlook.com',
    password: 'neversaynever3',
    // contact is a nested object
    contact: {
        phone: '123-456-7890',
        office: 'wherever drive'
    }, // end contact nested object 
    roles: ['web design','graphics'] 
}

user.salary = '20' // adds a property salary
user.roles.push('server admin') // push adds to the array
user.contact.location = 'minneapolis' // adds to contact array 
console.log(user)







// create name, email, password, contact, roles