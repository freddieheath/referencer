// 'Today' date option
// Multiple references (append a list)
// Clear list
// Alphabetice list
// Access Date

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

function addContributor(name) {
  const newInput = document.createElement("input");
  const newLabel = document.createElement("label");

  if (name === "first") {
    newInput.setAttribute("id", "newFirstName");
    newLabel.innerHTML = "First Name(s): ";
    newFirstName = { input: newInput, label: newLabel };
  }

  if (name === "last") {
    newInput.setAttribute("id", "newLastName");
    newLabel.innerHTML = "Last Name(s): ";
    newLastName = { input: newInput, label: newLabel };
  }

  form.insertBefore(newLabel, contributeButton);
  form.insertBefore(newInput, contributeButton);

  return { input: newInput, label: newLabel };
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

  if (newLastName && newLastName.input && newLastName.input.value) {
    citationComponents.push(newLastName.input.value + ", ");
  }

  if (newFirstName && newFirstName.input && newFirstName.input.value) {
    citationComponents.push(newFirstName.input.value[0] + ". ");
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
