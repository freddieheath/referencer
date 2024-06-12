// Format the array
// Add bracket automatically to end of array
// If fields haven't been completed then don't allow submit]
// & for two contributors and commas for more
// DD MM YYYY Format of Date
// Format the menu
// Page Numbder

// Declare all elements of the DOM as variables
const form = document.getElementById("form");
const labelSection = document.getElementById("labelSection");
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

// Create extra contributor input field and label
const contributors = [];
const newContributors = contributors.map((item) => item * 2);

function addContributor() {
  const newDiv = document.createElement("div");
  const firstInput = document.createElement("input");
  const lastInput = document.createElement("input");
  newDiv.classList.add("gap-x-2", "flex", "gap-y-2");
  firstInput.classList.add(
    "border",
    "border-gray-300",
    "text-gray-900",
    "text-sm",
    "rounded-lg",
    "flex-1",
    "p-2"
  );

  lastInput.classList.add(
    "border",
    "border-gray-300",
    "text-gray-900",
    "text-sm",
    "rounded-lg",
    "flex-1",
    "p-2"
  );

  labelSection.appendChild(newDiv);
  newDiv.appendChild(firstInput);
  newDiv.appendChild(lastInput);
  firstInput.placeholder = "First Name(s):";
  lastInput.placeholder = "Last Name:";
  return labelSection;
}

// Add contributor buttons and labels
contributeButton.addEventListener("click", () => {
  addContributor();
});

// Clear Forms
function clearForm() {}

// Get, format, and print values of fields into a bib. reference
function printBibRef() {
  const citationComponents = [];
  citationComponents.push("(");

  if (lastName.value) {
    citationComponents.push(`${lastName.value}, `);
  }

  if (firstName.value) {
    citationComponents.push(`${firstName.value[0]}. `);
  }

  // contributors add to array

  /* if (lastInput.value) {
    contributors.push(`${lastInput.value}`);
  }
  if (firstInput.value) {
    contributors.push(`${firstInput.value[0]}.`);
  }

  citationComponents.push(contributors);

  */

  if (year.value) {
    citationComponents.push(`(${year.value}). `);
  }

  if (title.value) {
    citationComponents.push(`${title.value}. [online] `);
  }

  if (publisher.value) {
    citationComponents.push(`${publisher.value}. `);
  }

  if (url.value) {
    citationComponents.push(`Available at: ${url.value}.`);
  }

  if (quote.value) {
    citationComponents.push(' "' + "<i>" + quote.value + "</i>" + '"' + ". ");
  }

  citationComponents.push(")");
  const refList = document.createElement("li");
  const ref = citationComponents.join("");
  refList.innerHTML = ref;
  bibRefList.appendChild(refList);
}

// Get, format, and print values of text references
function printTextRef() {
  const bibComponents = [];
  bibComponents.push("(");

  if (lastName.value) {
    bibComponents.push(`${lastName.value}, `);
  }

  if (year.value) {
    bibComponents.push(`${year.value}`);
  }

  bibComponents.push(")");
  const refList = document.createElement("li");
  const ref = bibComponents.join("");
  refList.innerHTML = ref;
  textRefList.appendChild(refList);
}

button.addEventListener("click", () => {
  printBibRef();
  printTextRef();
});
