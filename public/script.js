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
  const firstInput = document.createElement("input");
  const lastInput = document.createElement("input");
  firstInput.classList.add(
    "border",
    "border-gray-300",
    "text-gray-900",
    "text-sm",
    "rounded-lg",
    "p-2"
  );

  lastInput.classList.add(
    "border",
    "border-gray-300",
    "text-gray-900",
    "text-sm",
    "rounded-lg",
    "p-2"
  );

  labelSection.appendChild(firstInput);
  labelSection.appendChild(lastInput);
  firstInput.placeholder = "First Name(s):";
  lastInput.placeholder = "Last Names(s):";
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
    citationComponents.push(`${publisher.value} `);
  }

  if (url.value) {
    citationComponents.push(`Available at: ${url.value}.`);
  }

  if (quote.value) {
    citationComponents.push(' "' + "<i>" + quote.value + "</i>" + '"' + ". ");
  }

  citationComponents.push(")");

  bibRefList.innerHTML = citationComponents.join("");
}

// Get, format, and print values of text references
function printTextRef() {
  const bibComponents = [];

  if (lastName.value) {
    bibComponents.push(`(${lastName.value}, `);
  }

  if (year.value) {
    bibComponents.push(`${year.value})`);
  }

  textRefList.innerHTML = bibComponents.join("");
}

button.addEventListener("click", () => {
  printBibRef();
  printTextRef();
});
