// Object Desctructuring

const person = {
    name: 'Balint', 
    age: 30,
    location: {
        city: 'Vienna',
        temp: 5
    }
}

const { name: firstName = 'Anonymus', age } = person

console.log(`${firstName} is ${age}.`);


const { city, temp: temperature} = person.location

if (city && temperature) {
console.log(`It is ${temperature} in ${city}.`)
}


////////////////////////////////////////////////////////////

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);

// Array Destructuring

const address = ['Kopalgasse 74/305', 'Vienna', 'Austria', '1110']

const [, myCity, country = 'Hungary'] = address

console.log(`You are in ${myCity} ${country}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [coffee, , mediumPrice] = item

console.log(`A medium ${coffee} costs ${mediumPrice}.`);
