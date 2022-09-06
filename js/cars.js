// btn will be favorite
// A will be grey
// B will be yellow
let elements = document.querySelectorAll(".favorite");
let flags = [];
const child1 = ".grey";
const child2 = ".yellow";

// initialize flags
for (let i = 0; i < elements.length; i++) {
  flags[i] = false;
}

// Add event listener all elements that have 'btn' class
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    if (flags[i]) {
      elements[i].querySelector(child1).style.display = "inline-block";
      elements[i].querySelector(child2).style.display = "none";
    } else {
      elements[i].querySelector(child1).style.display = "none";
      elements[i].querySelector(child2).style.display = "inline-block";
    }
    flags[i] = !flags[i];
  });
}
