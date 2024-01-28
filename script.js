// 'Today' date option
// Multiple contributors
// Multiple references (append a list)
// Clear list
// Alphabetice list
// Keep list after refresh?
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

function addContributor() {
  const newContributor = document.createElement("input");
  newContributor.className = "new_contributor";
  form.insertBefore(newContributor, contributeButton);
}

function addLabel(name) {
  const newLabel = document.createElement("label");

  if (name === "first") {
    newLabel.innerHTML = "First Name(s): ";
  }

  if (name === "last") {
    newLabel.innerHTML = "Last Name(s): ";
  }

  form.insertBefore(newLabel, contributeButton);
}

contributeButton.addEventListener("click", () => {
  addLabel("first");
  addContributor();
  addLabel("last");
  addContributor();
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
    citationComponents.push(" Available at: " + url.value + ". ");
  }

  if (quote.value) {
    citationComponents.push(' "' + "<i>" + quote.value + "</i>" + '"');
  }

  bibRefList.innerHTML = citationComponents.join("") + ".";
}
function printTextRef() {
  textRefList.innerHTML =
    "In-Text Citation: " + "(" + lastName.value + ", " + year.value + ")";
}

button.addEventListener("click", () => {
  printBibRef();
  printTextRef();
});
