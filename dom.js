// const myHeading = document.getElementsByClassName("heading");
// const head = document.getElementById("head");
// const hh = document.getElementsByTagName("h1");

// const head1 = document.querySelectorAll("h1");

// console.log("Class Name: ", myHeading);
// console.log("By Id: ", head);
// console.log("By tag name: ", hh);
// console.log("By query selector: ", head1);

// const btn = document.querySelector(".btnClick");
// const div = document.querySelector(".myDiv");

// btn.addEventListener("click", () => {
//   // alert("Click");
//   myHead.classList.add("yourHead");
// });

// const myHead = document.querySelector(".myHead");

// const value = myHead.innerHTML;
// console.log(value, ":h1 Value");

// const myValue = "hello";

// myHead.innerHTML = myValue;

// clearTimeout(myTime);

let count = 0;
const myTime = setInterval(() => {
  count++;
  console.log(count);
}, 1000);

setTimeout(() => {
  clearInterval(myTime);
}, 4000);
