let themeDots = document.getElementsByClassName("theme-dot");
let theme = localStorage.getItem("theme");
if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "default.css";
  }
  if (mode == "blue") {
    document.getElementById("theme-style").href = "blue.css";
  }
  if (mode == "green") {
    document.getElementById("theme-style").href = "green.css";
  }
  if (mode == "purple") {
    document.getElementById("theme-style").href = "purple.css";
  }
  localStorage.setItem("theme", mode);
}

const heading = document.querySelector(".greeting-wrapper h1");
const originalText = "Hi, my name is Papuna Berdzenishvili";
const replacementText = "Front-End Developer";

heading.textContent = "";

let index = 0;

function type() {
  const nextLetter = originalText[index];

  heading.textContent += nextLetter;
  index++;

  if (index < originalText.length) {
    setTimeout(type, 100);
  } else {
    index = 0;
    text = replacementText;
    setTimeout(deleteText, 1000);
  }
}

function deleteText() {
  heading.textContent = "";

  function typeReplacement() {
    const nextLetter = text[index];

    heading.textContent += nextLetter;

    index++;

    if (index < text.length) {
      setTimeout(typeReplacement, 200);
    }
  }

  setTimeout(typeReplacement, 400);
}

window.addEventListener("load", () => {
  type();
});

function deleteText() {
  heading.textContent = "";

  function typeReplacement() {
    const nextLetter = text[index];

    heading.textContent += nextLetter;

    index++;

    if (index < text.length) {
      setTimeout(typeReplacement, 100);
    } else {
      // check if replacement text has finished typing
      setTimeout(() => {
        heading.textContent = originalText;
      }, 1000);
    }
  }

  setTimeout(typeReplacement, 400);
}




