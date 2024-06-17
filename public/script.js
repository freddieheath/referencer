// Format the array
// If fields haven't been completed then don't allow submit]
// Clear forms
// & for two contributors and commas for more
// DD MM YYYY Format of Date
// Format the menu
// Page Number
// Automatically order alphabetically
// Red asterix on missing info
// combine print functions
// CRUD

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

function addContributor() {
  const newDiv = document.createElement("div");
  const firstInput = document.createElement("input");
  const lastInput = document.createElement("input");
  firstInput.setAttribute("id", "firstInput");
  lastInput.setAttribute("id", "lastInput");
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
}

// Add contributor buttons and labels
contributeButton.addEventListener("click", () => {
  addContributor();
});

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

  const firstInput = document.getElementById("firstInput");
  const lastInput = document.getElementById("lastInput");
  if (firstInput && lastInput) {
    contributors.push(`and ${lastInput.value}, `);
    contributors.push(`${firstInput.value[0]}.`);
  }
  const con = contributors.join("");

  if (contributors) {
    citationComponents.push(con);
  }

  if (year.value == "") {
    citationComponents.push(` (n.d.).`);
  } else if (year.value) {
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
    bibComponents.push(`${lastName.value} `);
  }

  const lastInput = document.getElementById("lastInput");
  bibComponents.push(`and ${lastInput.value}. `);

  if (year.value == "") {
    bibComponents.push(`n.d.`);
  } else if (year.value) {
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
  console.log(contributors);
});
