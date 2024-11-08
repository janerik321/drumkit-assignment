const drumArea = document.querySelector("#drum-area");
const drumkit = [
  "Clap",
  "a",
  "Hihat",
  "w",
  "Kick",
  "e",
  "Openhat",
  "f",
  "Ride",
  "h",
  "Snare",
  "u",
  "Tink",
  "i",
  "Tom",
  "l",
];

// Loop to create divs
for (let i = 0; i < drumkit.length; i += 2) {
  const drumDiv = document.createElement("div");
  const drumTitle = document.createElement("p");
  const keyShort = document.createElement("h3");
  const drumCombined = document.createElement("div");
  drumTitle.textContent = drumkit[i];
  keyShort.textContent = drumkit[i + 1].toUpperCase();
  drumDiv.id = drumkit[i].toLowerCase();

  drumDiv.classList.add("drums");
  drumCombined.classList.add("drum-combined");

  // Raise drums to match finger and keyboard shortcut layout
  if (i === 2 || i === 4 || i === 10 || i === 12) {
    drumCombined.style.marginBottom = "65px";
  }

  // Click event listener
  drumDiv.addEventListener("click", () => {
    new Audio(`./sounds/${drumkit[i].toLowerCase()}.wav`).play();

    // Animation. Removing and adding class to reset animation. Delay needed for it to work.
    drumDiv.classList.remove("drum-hit");

    setTimeout(() => {
      drumDiv.classList.add("drum-hit");
    }, 1);
  });

  drumCombined.append(drumTitle, drumDiv, keyShort);
  drumArea.append(drumCombined);
}

// Keypress event listener
window.addEventListener("keydown", (e) => {
  const drum = drumkit.indexOf(e.key) - 1;
  if (drumkit.includes(e.key)) {
    const drumId = document.querySelector(`#${drumkit[drum].toLowerCase()}`);

    new Audio(`./sounds/${drumkit[drum].toLowerCase()}.wav`).play();

    // Animation. Removing and adding class to reset animation. Delay needed for it to work.
    drumId.classList.remove("drum-hit");

    setTimeout(() => {
      drumId.classList.add("drum-hit");
    }, 1);
  }
});
