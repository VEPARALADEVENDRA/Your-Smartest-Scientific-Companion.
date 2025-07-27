// Heading
let cal = document.getElementById("demo");
cal.innerHTML = "⚛️ The Future of Scientific Thinking, One Calculation at a Time!....";
cal.style.backgroundImage = "video.mp4";
cal.style.color = "green";
cal.style.textAlign = "center";
cal.style.display = "flex";
cal.style.justifyContent = "center";
cal.style.alignItems = "center";
cal.style.fontSize = "60px";
cal.style.fontStyle = "italic";
cal.style.fontWeight = "bold";
cal.style.marginTop = "20px";
cal.style.animation = "colorShift 3s infinite";


//video Button
let video = document.createElement("video");
video.src = "cal.video.mp4";
video.autoplay = true;
video.loop = true;
video.muted = true;
video.id = "video-bg";
video.style.position = "fixed";
video.style.right = "0";
video.style.bottom = "0";
video.style.minWidth = "100%";
video.style.minHeight = "100%";
video.style.zIndex = "-1";
video.style.objectFit = "cover";
document.body.prepend(video);


/// Main container
let container = document.createElement("div");
container.style.backgroundColor = "rgba(10, 206, 10, 0.3)";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.height = "60vh";
container.style.width = "90vw"; // Correct way to set width
container.style.marginLeft = "auto";
container.style.marginRight = "auto"; // centers it horizontally
document.body.appendChild(container);



// Calculator setup Button
let calcBox = document.createElement("div");
calcBox.style.backgroundColor = "#ffffff";
calcBox.style.borderRadius = "15px";
calcBox.style.padding = "20px";
calcBox.style.boxShadow = "0 0 20px rgba(0,0,0,0.3)";
container.appendChild(calcBox);


// Display
let display = document.createElement("input");
display.type = "text";
display.readOnly = true;
display.style.width = "100%";
display.style.height = "50px";
display.style.fontSize = "24px";
display.style.textAlign = "right";
display.style.marginBottom = "20px";
calcBox.appendChild(display);

// Button layout
const buttons = [
  ["C", "1", "2", "/"],
  ["3", "4", "5", "*"],
  ["6", "7", "8", "-"],
  ["9", ".", "=", "+"],
  ["0"]
];

buttons.forEach(row => {
  let rowDiv = document.createElement("div");
  rowDiv.style.display = "flex";
  rowDiv.style.justifyContent = "space-between";
  rowDiv.style.marginBottom = "10px";

  row.forEach(btn => {
    let button = document.createElement("button");
    button.innerText = btn;
    button.style.width = "60px";
    button.style.height = "60px";
    button.style.fontSize = "22px";
    button.style.border = "none";
    button.style.borderRadius = "10px";
    button.style.backgroundColor = "#2f80ed";
    button.style.color = "white";
    button.style.cursor = "pointer";
    button.style.transition = "transform 0.2s ease";

    // Animate on hover
  button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "green";  // Corrected line
  button.style.transform = "scale(1.1)";
});

  button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "#2f80ed"; // Reset to original color
  button.style.transform = "scale(1)";
});


    button.addEventListener("click", () => {
      if (btn === "C") {
        display.value = "";
      } else if (btn === "=") {
        try {
          display.value = eval(display.value);
        } catch {
          display.value = "Error";
        }
      } else {
        display.value += btn;
      }
    });

    rowDiv.appendChild(button);
  });

  calcBox.appendChild(rowDiv);
});
