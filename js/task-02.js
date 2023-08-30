const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((listItem) => {
  document.querySelector("li"); //elemy listy
  const liElemCreate = document.createElement("li"); // tworzenie li
  const ingredientsList = document.querySelector("#ingredients"); //ul
  console.log((liElemCreate.textContent = listItem)); 
  liElemCreate.classList.add("item"); //dodanie klasy do tworzenia li
  ingredientsList.appendChild(liElemCreate); // append do doma
});
