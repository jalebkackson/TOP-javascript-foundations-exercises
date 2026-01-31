// Map to names
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// solution
// let names = users.map(user => user.name)

// Map to objects
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(user => {
//    return {
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }
// })

// console.log(usersMapped)

// Sort users by age
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [pete, john, mary];
// const sortByAge = (array) => {
//     return array.sort((a, b) => a.age - b.age)
// }

// console.log(sortByAge(arr))

// Get average age
const getAverageAge = (array) => {
  const total = array.reduce((acc, item) => acc + item.age, 0);
  const average = total / array.length;
  console.log(average);
};

getAverageAge(arr);

// create keyed object from array
let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

const groupById = (arr) => {
  let userObject = {};
  arr.forEach((user) => {
    userObject[user.id] = user;
  });
  return userObject;
};

console.log(groupById(users));
