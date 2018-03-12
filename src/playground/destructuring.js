//object destructuring

// const person = {
//     name : 'tejas',
//     age : 23,
//     location:  {
//         city:'bhavnagar',
//         temperature:32
//     }
// };

// const {name:firstname,age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstname} is ${age}.`);

// const {city,temperature:temp} = person.location;

// if(city && temp){
//     console.log(`its ${temp} in ${city}.`);
// }

// const book = {
//     title: "Ego is th Enemy",
//     author: "Ryan Holiday",
//     publisher:{
//         name:'penguine'
//     }
// }

// const {name:publishername} = book.publisher;
// console.log(publishername);


/// array destructuring

const address = ['1299 $ juniou street','Philadelphia','pennysylvania','19147'];
const [street,city,state,zip] = address;
console.log(`You are in  ${city} in ${state}.`);

const item =['coffee (hot)','$2','$2.50','$2.75'];

const [item1, ,price] = item;
console.log(`A medium ${item1} costs ${price}`);