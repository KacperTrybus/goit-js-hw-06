const input = document.getElementById("validation-input"); //biore input

const inputDataLength = input.getAttribute("data-length"); //length jako string
const inputDataLengthNum = Number(inputDataLength); // length jako liczba

input.addEventListener("blur", checkIfValid);

function checkIfValid() {
  const inputLengthValiue = input.value.length;
  if (inputLengthValiue === inputDataLengthNum) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
