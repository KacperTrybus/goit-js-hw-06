const input = document.getElementById("validation-input"); //biore input

const dL = input.getAttribute("data-length"); //biore moj length na valid

input.addEventListener("blur", checkIfValid);

function checkIfValid() {
  const dl = input.value.length; // dl to dlugosc wartosci inputa
  if (dl === 6) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else if (dl !== 6) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
