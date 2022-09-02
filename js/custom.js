// // const targetDiv = document.getElementById("toggle-favorite");
// // const btn = document.getElementById("favorite");
// // btn.onclick = function myFunction() {
// //   if (targetDiv.style.display !== "none") {
// //     targetDiv.style.display = "none";
// //   } else {
// //     targetDiv.style.display = "block";
// //   }
// // };

// // Version 1 - Michi coded this version
// // let status = [false, false, false, false, false];
// // let temporaryName = document.querySelectorAll();

// // function focusInactive() {
// //   let inactive = document.getElementById("inactive-favorite").style.zIndex;
// //   let active = document.getElementById("active-favorite").style.zIndex;
// //   if (inactive == 5) {
// //     document.getElementById("inactive-favorite").style.zIndex = 4;
// //     document.getElementById("active-favorite").style.zIndex = 5;
// //   } else {
// //     document.getElementById("inactive-favorite").style.zIndex = 5;
// //     document.getElementById("active-favorite").style.zIndex = 4;
// //   }
// // }

// // function focusActive() {
// //   let inactive = document.getElementById("inactive-favorite").style.zIndex;
// //   let active = document.getElementById("active-favorite").style.zIndex;
// //   if (inactive == 4) {
// //     document.getElementById("inactive-favorite").style.zIndex = 5;
// //     document.getElementById("active-favorite").style.zIndex = 4;
// //   } else {
// //     document.getElementById("inactive-favorite").style.zIndex = 4;
// //     document.getElementById("active-favorite").style.zIndex = 5;
// //   }
// // }

// // // Version 2 - Judah coded this version, using classes
// // // Using queryselector to turn on and off classes, displaying img as block or none.
// // const greyPin = document.querySelector(".closed");
// // const yellowPin = document.querySelector(".open");

// // //Add event listener
// // greyPin.addEventListener("click", () => {
// //   if (yellowPin.classList.contains("open")) {
// //     //using classes
// //     yellowPin.classList.add("activeblock");
// //     greyPin.classList.remove("activeblock");
// //   }
// // });

// // yellowPin.addEventListener("click", () => {
// //   if (greyPin.classList.contains("closed")) {
// //     //using classes
// //     greyPin.classList.add("activeblock");
// //     yellowPin.classList.remove("activeblock");
// //   }
// // });

// // // Version 3 - Judah coded this, using variables

// // // Using queryselector to turn on and off classes, displaying img as block or none.
// // const greyPin = document.querySelector(".closed");
// // const yellowPin = document.querySelector(".open");

// // //Add event listener
// // greyPin.addEventListener("click", () => {
// //   if (greyPin) {
// //     //using just variable
// //     yellowPin.classList.add("activeblock");
// //     greyPin.classList.remove("activeblock");
// //   }
// // });

// // yellowPin.addEventListener("click", () => {
// //   if (yellowPin) {
// //     //using just variable
// //     greyPin.classList.add("activeblock");
// //     yellowPin.classList.remove("activeblock");
// //   }
// // });

// // // Version 4 - Judah coded this, using boolean, but I don't know how to finish it.
// // // Boolean function
// // let favorite = document.querySelectorAll(".favorite");
// // let greyPin = [false, false, false, false, false];

// // for (let index = 0; index < array.length; index++) {
// //   const element = array[index];
// // }

// // favorite.addEventListener("click", function () {
// //   if (greyPin) {
// //     document.querySelectorAll(".grey").style.display = "block";
// //     document.querySelectorAll(".yellow").style.display = "none";
// //   } else {
// //     document.querySelectorAll(".yellow").style.display = "block";
// //     document.querySelectorAll(".grey").style.display = "none";
// //   }
// // });

// // favorite.addEventListener("click", function () {
// //   if (!greyPin) {
// //     document.querySelectorAll(".yellow").style.display = "block";
// //     document.querySelectorAll(".grey").style.display = "none";
// //   } else {
// //     document.querySelectorAll(".grey").style.display = "block";
// //     document.querySelectorAll(".yellow").style.display = "none";
// //   }
// // });

// // version 5
// let favorite = document.querySelectorAll(".favorite");

console.log(document.querySelectorAll(".grey"));

// for (let i = 0, i < 5; i++) {
//   favorite.addEventListener("click", function () {
//   if (greyPin) {
//     document.querySelectorAll(".grey").style.display = "block";
//     document.querySelectorAll(".yellow").style.display = "none";
//   } else {
//     document.querySelectorAll(".yellow").style.display = "block";
//     document.querySelectorAll(".grey").style.display = "none";
//   }
// });

// favorite.addEventListener("click", function () {
//   if (!greyPin) {
//     document.querySelectorAll(".yellow").style.display = "block";
//     document.querySelectorAll(".grey").style.display = "none";
//   } else {
//     document.querySelectorAll(".grey").style.display = "block";
//     document.querySelectorAll(".yellow").style.display = "none";
//   }
// });
// };
