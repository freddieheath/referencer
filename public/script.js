// Add bracket automatically to end of array

// Declare all elements of the DOM as variables
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

// Create extra contributor input field and label
const contributors = [];
const newContributors = contributors.map((item) => item * 2);

function addContributor(name) {
  const newLabel = document.createElement("label");
  const input = document.createElement("input");

  form.insertBefore(newLabel, contributeButton);

  if (name === "last") {
    newLabel.innerHTML = "Last Name(s): ";
    form.insertBefore(input, contributeButton);
  }
  if (name === "first") {
    newLabel.innerHTML = "First Name(s): ";
    form.insertBefore(input, contributeButton);
  }
  contributors.push({
    input: input,
  });
}

// Add contributor buttons and labels
contributeButton.addEventListener("click", () => {
  addContributor("first");
  addContributor("last");
});

// Get, format, and print values of fields into a bib. reference
function printBibRef() {
  const citationComponents = [];

  if (lastName.value) {
    citationComponents.push(`(${lastName.value}, `);
  }

  if (firstName.value) {
    citationComponents.push(`${firstName.value[0]}. `);
  }

  contributors.forEach((contributor) => {
    if (contributor.input.value) {
      citationComponents.push(contributor.input.value + ", ");
    }
  });

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

  bibRefList.innerHTML =
    "Bibliography Citation: " + citationComponents.join("");
}

// Get, format, and print values of text references
function printTextRef() {
  const bibComponents = [];

  if (lastName.value) {
    bibComponents.push(`(${lastName.value}, `);
  }

  contributors.forEach((contributor) => {
    if (contributor.input.value) {
      bibComponents.push(contributor.input.value);
    }
  });

  if (year.value) {
    bibComponents.push(`${year.value})`);
  }

  textRefList.innerHTML = "In-Text Citation: " + bibComponents.join("");
}

button.addEventListener("click", () => {
  printBibRef();
  printTextRef();
});
