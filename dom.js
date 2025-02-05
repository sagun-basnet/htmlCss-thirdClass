// const myHeading = document.getElementsByClassName("heading");
// const head = document.getElementById("head");
// const hh = document.getElementsByTagName("h1");

// const head1 = document.querySelectorAll("h1");

// console.log("Class Name: ", myHeading);
// console.log("By Id: ", head);
// console.log("By tag name: ", hh);
// console.log("By query selector: ", head1);

const btn = document.querySelector(".btnClick");
const div = document.querySelector(".myDiv");

btn.addEventListener("click", () => {
  div.style.backgroundColor = "blue";
  div.style.margin = "2rem";
});
