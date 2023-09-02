const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const gallery = document.querySelector(".gallery");

const galleryItemString = images
  .map((image) => `<li><img src="${image.url}"></li>`) // stringi z ele do html niepolaczone

  .join(""); //polaczone

gallery.innerHTML = galleryItemString; //dodanie str do html

/*
 const add = `<img src="${image.url}" alt="Inserted Image">`;

 const liElemCreate = document.createElement("li");

 liElemCreate.insertAdjacentHTML("afterbegin", add); // dod zdj do li

 Old:
 images.forEach((image) => {
  const add = `<img src="${image.url}" alt="Inserted Image">`;
  const liElemCreate = document.createElement("li");
  gallery.insertAdjacentElement("afterbegin", liElemCreate); //dod li do galerii
  liElemCreate.insertAdjacentHTML("afterbegin", add); // dod do li zdjecia
}); 
*/
