// const targetDiv = document.getElementById("toggle-favorite");
// const btn = document.getElementById("favorite");
// btn.onclick = function myFunction() {
//   if (targetDiv.style.display !== "none") {
//     targetDiv.style.display = "none";
//   } else {
//     targetDiv.style.display = "block";
//   }
// };

// Version 1 - Michi coded this version
function focusInactive() {
  let inactive = document.getElementById("inactive-favorite").style.zIndex;
  let active = document.getElementById("active-favorite").style.zIndex;
  if (inactive == 5) {
    document.getElementById("inactive-favorite").style.zIndex = 4;
    document.getElementById("active-favorite").style.zIndex = 5;
  } else {
    document.getElementById("inactive-favorite").style.zIndex = 5;
    document.getElementById("active-favorite").style.zIndex = 4;
  }
}

function focusActive() {
  let inactive = document.getElementById("inactive-favorite").style.zIndex;
  let active = document.getElementById("active-favorite").style.zIndex;
  if (inactive == 4) {
    document.getElementById("inactive-favorite").style.zIndex = 5;
    document.getElementById("active-favorite").style.zIndex = 4;
  } else {
    document.getElementById("inactive-favorite").style.zIndex = 4;
    document.getElementById("active-favorite").style.zIndex = 5;
  }
}


// Version 2 - Judah coded this version, using classes
// Using queryselector to turn on and off classes, displaying img as block or none.
const greyPin = document.querySelector('.closed');
const yellowPin = document.querySelector('.open');

//Add event listener
greyPin.addEventListener('click', () => {
  if(yellowPin.classList.contains('open')) { //using classes
    yellowPin.classList.add('activeblock');
    greyPin.classList.remove('activeblock');
  }
});

yellowPin.addEventListener('click', () => {
  if(greyPin.classList.contains('closed')) { //using classes
    greyPin.classList.add('activeblock');
    yellowPin.classList.remove('activeblock');
  }
});



// Version 3 - Judah coded this, using variables

// Using queryselector to turn on and off classes, displaying img as block or none.
const greyPin = document.querySelector('.closed');
const yellowPin = document.querySelector('.open');

//Add event listener
greyPin.addEventListener('click', () => {
  if(greyPin) { //using just variable
    yellowPin.classList.add('activeblock');
    greyPin.classList.remove('activeblock');
  }
});

yellowPin.addEventListener('click', () => {
  if(yellowPin) { //using just variable
    greyPin.classList.add('activeblock');
    yellowPin.classList.remove('activeblock');
  }
});






// Version 4 - Judah coded this, using boolean, but I don't know how to finish it.
// Boolean function
let favorite = document.querySelector('.favorite');
let greyPin = false;

favorite.addEventListener("click", function() {
  if(greyPin){
    document.querySelector('.grey').style.display = "block";
    document.querySelector('.yellow').style.display = "none";
  } else {
    document.querySelector('.yellow').style.display = "block";
    document.querySelector('.grey').style.display = "none";
  }
});

favorite.addEventListener("click", function() {
  if(!greyPin){
    document.querySelector('.yellow').style.display = "block";
    document.querySelector('.grey').style.display = "none";
  } else {
    document.querySelector('.grey').style.display = "block";
    document.querySelector('.yellow').style.display = "none";
  }
});