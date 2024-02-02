// 'Today' date option
// Multiple references (append a list)
// Clear list
// Alphabetice list
// Access Date
// Fix text reference

const form = document.getElementById("form");
const lastName = document.getElementById("lastName");
const firstName = document.getElementById("firstName");
const contributeButton = document.getElementById("contributeButton");
const title = document.getElementById("title");
const url = document.getElementById("URL");
const year = document.getElementById("year");
const publisher = document.getElementById("publisher");
const quote = document.getElementById("quote");
const button = document.getElementById("button");
const textRefList = document.getElementById("inTextReferenceList");
const bibRefList = document.getElementById("bibliographyReferenceList");
let newFirstName;
let newLastName;
let lastNameCounter = 1;
let firstNameCounter = 1;

function addContributor(name) {
  const newInput = document.createElement("input");
  const newLabel = document.createElement("label");

  if (name === "first") {
    newInput.setAttribute("id", "newFirstName" + firstNameCounter++);
    newLabel.innerHTML = "First Name(s): ";
  }

  if (name === "last") {
    newInput.setAttribute("id", "newLastName" + lastNameCounter++);
    newLabel.innerHTML = "Last Name(s): ";
  }

  form.insertBefore(newLabel, contributeButton);
  form.insertBefore(newInput, contributeButton);
}

contributeButton.addEventListener("click", () => {
  addContributor("first");
  addContributor("last");
});

function printBibRef() {
  const citationComponents = [];

  if (lastName.value) {
    citationComponents.push(lastName.value + ", ");
  }

  if (firstName.value) {
    citationComponents.push(firstName.value[0] + ". ");
  }

  if (year.value) {
    citationComponents.push("(" + year.value + "). ");
  }

  if (title.value) {
    citationComponents.push("<i>" + title.value + "</i>" + ". [online] ");
  }

  if (publisher.value) {
    citationComponents.push(publisher.value);
  }

  if (url.value) {
    citationComponents.push(" Available at: " + url.value + ".");
  }

  if (quote.value) {
    citationComponents.push(' "' + "<i>" + quote.value + "</i>" + '"' + ". ");
  }

  bibRefList.innerHTML = citationComponents.join("");
}
function printTextRef() {
  textRefList.innerHTML =
    "In-Text Citation: " + "(" + lastName.value + ", " + year.value + ")";
}

button.addEventListener("click", () => {
  printBibRef();
  printTextRef();
});
