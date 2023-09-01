function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector("body"); //body
const btn = document.querySelector(".change-color"); // btn
const colorText = document.querySelector(".color"); // text color

function changeColor() {
  const randomColor = getRandomHexColor(); //wynik funkcji
  const colorBg = (bodyColor.style.backgroundColor = randomColor);

  colorText.innerHTML = `${randomColor}`;
}

btn.addEventListener("click", changeColor);
