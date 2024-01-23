const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const title = document.getElementById("title");
const URL = document.getElementById("URL");
const date = document.getElementById("date");
const publisher = document.getElementById("publisher");
const button = document.getElementById("button");
const textRef = document.getElementById("inTextReference");
const bibRef = document.getElementById("bibliographyReference");

function printBibRef() {}

function printTextRef() {
  textRef.textContent = "(" + firstName.value + ", " + date.value + ")";
}

button.addEventListener("click", printTextRef);
