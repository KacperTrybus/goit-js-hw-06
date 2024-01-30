
const inputText = document.getElementById("text"); //span
const inputSlide = document.getElementById("font-size-control"); //input

function fontChange() {
  const value = inputSlide.value;
  //   console.log(value);

  inputText.style.fontSize = value + "px";
}
inputSlide.addEventListener("input", fontChange);
