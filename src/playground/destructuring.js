// const person = {
// 	name: 'Ohad',
// 	age: 35,
// 	location: {
// 		city: 'Berlin',
// 		temp: 28
// 	}

// }

// const { name = 'Annonymous', age } = person;
// const { city, temp: temprature } = person.location;

// console.log(`${name} is ${age} year(s) old.`);

// if (city && temprature) {
// 	console.log(`It's ${temprature} degrees in ${city}.`);
// }

const address = ['1299 S Juniper Street', 'Philadelphia', 'Penssilvania', '19147'];
const [ , city, state ] = address;

console.log(`You are in ${city} ${state}.`)