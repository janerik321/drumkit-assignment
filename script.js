const drumArea = document.querySelector("#drum-area");
const drumkit = [
  "Clap",
  "Hihat",
  "Kick",
  "Openhat",
  "Ride",
  "Snare",
  "Tink",
  "Tom",
];

for (drum of drumkit) {
  const drumDiv = document.createElement("div");
  const drumTitle = document.createElement("p");
  const drumCombined = document.createElement("div");
  drumTitle.textContent = drum;
  drumDiv.classList.add("drums");
  drumCombined.append(drumTitle, drumDiv);
  drumArea.append(drumCombined);
}
