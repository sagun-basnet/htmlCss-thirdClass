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

// let count = 0;
// const myTime = setInterval(() => {
//   count++;
//   console.log(count);
// }, 1000);

// setTimeout(() => {
//   clearInterval(myTime);
// }, 4000);

try {
  let a = 12;
  let b = 2;

  let c = a / b;
  console.log(c);
  if (b === 0) {
    throw new Error("Custom Error"); // custom error
  }
} catch (error) {
  console.log("Error aayo: ", error);
} finally {
  console.log("I am from finally");
}
