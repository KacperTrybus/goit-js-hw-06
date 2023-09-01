/*Napisz skrypt, który reaguje na zmianę wartości elementu input#font-size-control
(zdarzenie input) i zmienia styl inline span#text aktualizując właściwość font-size.
W rezultacie, podczas zmiany wartości suwakiem,
ma zmieniać się rozmiar tekstu w elemencie span */

const inputText = document.getElementById("text"); //span
const inputSlide = document.getElementById("font-size-control"); //input

function fontChange() {
  const value = inputSlide.value;
  //   console.log(value);

  inputText.style.fontSize = value + "px";
}
const dupa = inputSlide.addEventListener("input", fontChange);
