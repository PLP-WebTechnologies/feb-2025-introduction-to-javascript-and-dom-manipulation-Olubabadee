function changeText() {
  const text = document.getElementById("dynamic-text");
  text.textContent = "The text has now changed!";
}

function changeStyle() {
  const styled = document.getElementById("styled-text");
  styled.style.color = "green";
  styled.style.fontSize = "20px";
  styled.style.backgroundColor = "#e0f7e9";
  styled.style.padding = "10px";
}

function toggleElement() {
  const container = document.getElementById("container");
  const existing = document.getElementById("toggle-element");

  if (existing) {
    container.removeChild(existing);
  } else {
    const newElement = document.createElement("p");
    newElement.id = "toggle-element";
    newElement.textContent = "Element added back!";
    container.appendChild(newElement);
  }
}

function updateDate() {
  const dateElement = document.getElementById("update-date");
  const currentDate = new Date().toLocaleDateString();
  dateElement.textContent = "Today's date is: " + currentDate;
}

// Hover event
const hoverText = document.getElementById("hover-text");
hoverText.addEventListener("mouseover", () => {
  hoverText.style.color = "blue";
  hoverText.textContent = "You hovered over me!";
});
hoverText.addEventListener("mouseout", () => {
  hoverText.style.color = "black";
  hoverText.textContent = "Hover over me!";
});
