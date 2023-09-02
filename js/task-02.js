const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients"); //ul
const ingredientsArray = [];

ingredients.forEach((listItem) => {
  const liElemCreate = document.createElement("li"); // tworzenie li
  liElemCreate.classList.add("item"); //dodanie klasy do tworzenia li

  liElemCreate.textContent = listItem; // ustawienie textu nowego li jako elemu listy
  ingredientsArray.push(liElemCreate);
});

ingredientsList.append(...ingredientsArray); // append do doma
