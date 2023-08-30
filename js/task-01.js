// Napisz skrypt, który:

// Policzy i wypisze w konsoli liczbę kategorii w ul#categories, czyli elementy li.item.
// Dla każdego elementu li.item na liście ul#categories, znajdzie i wypisze w konsoli tekst nagłówka elementu (tag <h2>) i liczbę elementów w danej kategorii (wszystkich w jej obrębie <li>).
// Po wykonaniu w konsoli znajdą się takie komunikaty.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const catList = document.querySelector("#categories");
const listElem = catList.querySelectorAll(".item"); //lista itemow
console.log(`Number of categories: ${listElem.length}`);

listElem.forEach((listElement) => {
  const catName = listElement.querySelector("h2").textContent;
  const total = listElement.querySelectorAll("ul li").length;
  console.log(`
Category: ${catName}
Elements: ${total}`);
});
