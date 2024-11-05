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

// const flash = () => {
//   if (drumId === "tom") {
//     drumDiv.id.style.backgroundColor = "red";
//   }
// };

for (let i = 0; i < drumkit.length; i += 2) {
  const drumDiv = document.createElement("div");
  const drumTitle = document.createElement("p");
  const drumCombined = document.createElement("div");
  drumTitle.textContent = `${drumkit[i]} (${drumkit[i + 1]})`;
  drumDiv.id = drumkit[i].toLowerCase();
  drumDiv.classList.add("drums");

  drumDiv.addEventListener("click", () => {
    new Audio(`./sounds/${drumkit[i].toLowerCase()}.wav`).play();
  });

  drumCombined.append(drumTitle, drumDiv);
  drumArea.append(drumCombined);
}

window.addEventListener("keydown", (e) => {
  const drum = drumkit.indexOf(e.key) - 1;
  if (drumkit.includes(e.key)) {
    new Audio(`./sounds/${drumkit[drum].toLowerCase()}.wav`).play();
    const drumId = document.querySelector(`#${drumkit[drum].toLowerCase()}`);
    // drumId.style.backgroundColor = "red";

    let activate = 100;

    const flash = () => {
      console.log(activate);
      if (activate === 0) {
        clearInterval(interval);
      } else {
        activate--;
        drumId.style.backgroundColor = `rgba(255, 255, 255, ${activate}%)`;
        drumId.style.width = `${75 + activate / 10}px`;
        drumId.style.height = `${75 + activate / 10}px`;
      }
    };
    const interval = setInterval(flash, 0.5);
  }
});
