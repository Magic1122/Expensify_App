// Object Desctructuring

/* const person = {
    name: 'Balint',
    age: 30,
    location: {
        city: 'Vienna',
        temp: 10
    }
};

console.log(`${person.name} is ${person.age}.`)

const {name: firstName = 'Anonymous', age} = person;
console.log(age);
console.log(firstName);

const {city, temp: temperature} = person.location;

if (city && temperature) {

console.log(`It is ${temperature} in ${city}.`)
};
 */

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher

console.log(publisherName); // default value, Self-Published



// Array Destructuring

const address = ['1299 S  Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`);

