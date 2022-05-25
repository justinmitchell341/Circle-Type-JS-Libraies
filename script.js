new CircleType(document.getElementById('demo3'));
const section = document.querySelector("section");
const bounce = document.querySelector(".bounce");
const FPS = 60;
section.style.height = window.innerHeight + "px";
section.style.width = window.innerWidth + "px";

// bounce moving velocity Variables
let xPosition = 10;
let yPosition = 10;
let xSpeed = 2;
let ySpeed = 2;
function update() {
  bounce.style.left = xPosition + "px";
  bounce.style.top = yPosition + "px";
}

setInterval(() => {
  if (xPosition + bounce.clientWidth >= window.innerWidth || xPosition <= 0) {
    xSpeed = -xSpeed;
    bounce.style.fill = randomColor();
  }
  if (yPosition + bounce.clientHeight >= window.innerHeight || yPosition <= 0) {
    ySpeed = -ySpeed;
    bounce.style.background = randomColor();
  }

  xPosition += xSpeed;
  yPosition += ySpeed;
  update();
}, 1000 / FPS);
function randomColor() {
  let color = "#";
  color += Math.floor(Math.random() * 16777215).toString(16);

  return color;
}
console.log(randomColor());

window.addEventListener("resize", () => {
  xPosition = 10;
  yPosition = 10;

  section.style.height = window.innerHeight + "px";
  section.style.width = window.innerWidth + "px";
});
