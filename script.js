// To-do
// Italicise title in bib ref
// 'Today' date option
// Multiple contributors
// Multiple references (append a list)
// Clear list
// Keep list after refresh
// Formatting of list

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const title = document.getElementById("title");
const url = document.getElementById("URL");
const year = document.getElementById("year");
const publisher = document.getElementById("publisher");
const button = document.getElementById("button");
const textRef = document.getElementById("inTextReference");
const bibRef = document.getElementById("bibliographyReference");

function printBibRef() {
  if (
    lastName.value &&
    firstName.value &&
    year.value &&
    title.value &&
    publisher.value &&
    url.value
  ) {
    bibRef.innerHTML =
      "Bibliography Citation: " +
      lastName.value +
      ", " +
      firstName.value[0] +
      ". " +
      "(" +
      year.value +
      "). " +
      "<i>" +
      title.value +
      "</i>" +
      ". [online] " +
      publisher.value +
      ". " +
      "Available at: " +
      url.value +
      ".";
  } else {
    alert("Please fill in all fields before submitting");
  }
}

function printTextRef() {
  if (lastName.value && year.value) {
    textRef.textContent =
      "In-text citation: " + "(" + lastName.value + ", " + year.value + ")";
  }
}

button.addEventListener("click", printBibRef);
button.addEventListener("click", printTextRef);
