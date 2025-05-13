let randombtn = document.querySelector(".randombtn");
let colorinput = document.querySelector("#input");
let applybtn = document.querySelector(".applybtn");
let currentcolorvalue = document.querySelector(".currentcolorvalue");
let container = document.querySelector(".container");

const handlecolor = (color) => {
  container.style.backgroundColor = color;
  container.style.transition = "0.9s";
  currentcolorvalue.textContent = color;
};

let colors = [
  "acqua",
  "gray",
  "white",
  "lightblue",
  "blue",
  "orange",
  "yellow",
  "green",
  "pink",
  "lightcoral",
  "tomato",
];

const randomColorGenerator = () => {
  let randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
};

const handleRandombtn = () => {
  let color = randomColorGenerator();
  handlecolor(color);
};

const handleApplybtn = () => {
  let color = colorinput.value;
  handlecolor(color);
};

randombtn.addEventListener("click", handleRandombtn);
applybtn.addEventListener("click", handleApplybtn);
