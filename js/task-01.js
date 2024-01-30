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
