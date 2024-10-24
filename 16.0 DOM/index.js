// EXERCISE 1 - DOM MANIPULATION

document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "CHANGED";

// An easier solution

document.getElementsByTagName("li")[2].innerHTML = "CHANGED";

// EXERCISE 2 - USING DOM TO CHANGE CSS

document.querySelector("button").style.backgroundColor = "yellow";

// EXERCISE 3 - USING DOM TO ADD CLASSES TO HTML ELEMENTS

document.querySelector("h1").classList.add("huge");

