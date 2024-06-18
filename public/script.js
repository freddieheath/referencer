// 2 and 3 or more contributors
// Glitch when second field is empty
// Red asterix on missing info
// & for two contributors and commas for more
// DD MM YYYY Format of Date
// Format the menu
// Page Number
// Automatically order alphabetically
// Auto capital
// Auto-gap

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
const list = document.getElementById("list");
const bibRefList = document.createElement("ul");
const textRefList = document.createElement("ul");

list.appendChild(bibRefList);
list.appendChild(textRefList);
bibRefList.classList.add("list-none");
textRefList.classList.add("list-none");

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

// Get, format, and print values of fields into references

function printRef() {
  const citationComponents = [];
  const bibComponents = [];
  citationComponents.push("(");
  bibComponents.push("(");

  if (lastName.value) {
    citationComponents.push(`${lastName.value}, `);
    bibComponents.push(`${lastName.value}`);
  }

  if (firstName.value) {
    citationComponents.push(`${firstName.value[0]}. `);
  }

  const firstInput = document.getElementById("firstInput");
  const lastInput = document.getElementById("lastInput");
  if (firstInput && lastInput) {
    contributors.push(`and ${lastInput.value}, `);
    contributors.push(`${firstInput.value[0]}.`);
    bibComponents.push(` and ${lastInput.value}`);
  }

  const con = contributors.join(""); // becomes a string
  contributors.splice(0, 2);

  if (contributors) {
    citationComponents.push(con);
  }

  if (year.value == "") {
    citationComponents.push(` (n.d.).`);
    bibComponents.push(`, n.d.`);
  } else if (year.value) {
    citationComponents.push(` (${year.value}). `);
    bibComponents.push(`${year.value}`);
  }

  if (title.value) {
    citationComponents.push(` ${title.value}. [online]`);
  }

  if (publisher.value) {
    citationComponents.push(` ${publisher.value}. `);
  }

  if (url.value) {
    citationComponents.push(`Available at: ${url.value}.`);
  }

  if (quote.value) {
    citationComponents.push(' "' + "<i>" + quote.value + "</i>" + '"' + ". ");
  }

  citationComponents.push(")");
  bibComponents.push(")");

  if (!firstName.value || !lastName.value || !title.value) {
    alert("Please input more information");
  } else {
    const ref = document.createElement("div");
    ref.classList.add(
      "flex",
      "justify-between",
      "my-2",
      "py-1",
      "italic",
      "cursor-pointer",
      "hover:bg-slate-100",
      "transition-all",
      "rounded-lg"
    );
    const bRef = document.createElement("p");
    const tRef = document.createElement("p");
    const bR = citationComponents.join("");
    const tR = bibComponents.join("");
    bRef.innerText = bR;
    tRef.innerText = tR;
    list.appendChild(ref);
    ref.appendChild(bRef);
    ref.appendChild(tRef);
    ref.addEventListener("dblclick", () => {
      list.removeChild(ref);
    });
  }
  lastName.value = "";
  firstName.value = "";
  firstInput.value = "";
  lastInput.value = "";
  title.value = "";
  year.value = "";
  title.value = "";
  publisher.value = "";
  url.value = "";
  quote.value = "";
}

button.addEventListener("click", () => {
  printRef();
});
