const display = document.querySelector(".input");
const add = document.querySelector(".add");
const list = document.querySelector(".list");

add.addEventListener("click", () => {
  const inputValue = display.value.trim();
  if (!inputValue) {
    alert("Please enter an input");
    return;
  }
  const li = document.createElement("li");
  Object.assign(li.style, {
    backgroundColor: "white",
    marginTop: "20px",
    border: "2px solid #00FFA7FF",
    borderRadius: "15px",
    height: "40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10px",
  });
  li.textContent = inputValue;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.marginRight = "10px";
  Object.assign(checkbox.style, {
    marginTop: "4px",
    marginRight: "10px",
    width: "20px",
    height: "20px",
    accentColor: "#00fda6",
  });

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }
  });

  const buttonContainer = document.createElement("div");
  Object.assign(buttonContainer.style, {
    display: "flex",
    gap: "10px",
  });

  const clearButton = document.createElement("button");
  clearButton.textContent = "delete";
  clearButton.className = "btn";
  clearButton.style.background = "#00FFA7FF";
  clearButton.style.color = "black";
  clearButton.style.border = "2px solid #000000";
  clearButton.style.padding = "5px";
  clearButton.style.borderRadius = "6px";
  clearButton.style.color = "black";
  clearButton.style.fontWeight = "bold";
  clearButton.style.cursor = "pointer";
  clearButton.addEventListener("click", () => {
    li.remove();
  });

  const editButton = document.createElement("button");
  editButton.textContent = "edit";
  editButton.className = "btn";
  editButton.style.background = "#00FFA7FF";
  editButton.style.color = "black";
  editButton.style.border = "2px solid #000000";
  editButton.style.padding = "5px";
  editButton.style.borderRadius = "6px";
  editButton.style.color = "black";
  editButton.style.fontWeight = "bold";
  editButton.style.cursor = "pointer";
  editButton.addEventListener("click", () => {
    const newValue = prompt("Enter new value");
    if (!newValue) {
    } else {
      li.firstChild.textContent = newValue;
      li.appendChild(buttonContainer);
    }
  });

  buttonContainer.appendChild(checkbox);
  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(clearButton);

  li.appendChild(buttonContainer);
  list.appendChild(li);

  display.value = "";
});