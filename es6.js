// for (let i = 0; i < 10; i++) {
//   console.log(i, " :i");
// }

// console.log(i, ":last");

// const fun = (a = 0) => console.log("Hello");

// fun();

// const name = "jhon";
// const age = 23;
// const phone = "90887364647";

// console.log(
//   "Hello my Name is: " +
//     name +
//     " and My age is: " +
//     age +
//     " and Phone is: " +
//     phone
// );
// console.log(
//   `Hello my Name is: ${name} and My age is: ${age} and Phone is: ${phone}`
// );

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let newArr = [0,...arr, 9, 10, 11, 12];
// console.log(newArr, ":Newarr");

// const first = arr[0];
// const second = arr[1];
// const third = arr[2];
// const fourth = arr[3];

const [first, second, third, fourth] = arr.reverse();

// console.log(first, second, third, fourth);

// let obj = {
//   name: "jhon",
//   age: 23,
//   phone: "90887364647",
// };

// let newObj = { ...obj, name };

let user = {
  name: "jhon",
  email: "jhon@example.com",
  password: "123456",
  age: 23,
  phone: "90887364647",
};
let { name, password, ...others } = user;

console.log(others, ":OTher");

// console.log(newObj, ":newObj");
