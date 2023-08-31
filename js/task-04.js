let counterValue = 0;

const div = document.getElementById("counter"); // wybranie diva
const num = div.querySelector("#value");

const clickPlus = () => {
  counterValue += 1;
  num.innerHTML = `${counterValue}`;
};

const clickMinus = () => {
  counterValue -= 1;
  num.innerHTML = `${counterValue}`;
};

const btnFirst = div.firstElementChild;
btnFirst.addEventListener("click", clickMinus);

const btnLast = div.lastElementChild;
btnLast.addEventListener("click", clickPlus);
