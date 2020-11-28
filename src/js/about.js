import "../css/about.css";

import refs from "./refs.js";
import houses from "../data/houses.js";
const { about } = refs;

const aboutTitle = document.createElement("h2");
aboutTitle.textContent = "About Us";
const housesList = document.createElement("ul");


function createItem (array) {
  return array.map(house => {
    const { name, pictures, price } = house;
    const houseItem = document.createElement("li");
    const houseName = document.createElement("h3");
    houseName.textContent = name;
    const photos = pictures.map(url =>{
      const houseImg = document.createElement("img");
      houseImg.setAttribute('src', url);
      return houseImg;
    });
    const imgContainer = document.createElement("div");
    imgContainer.append(...photos);
    const housePrice = document.createElement("p");
    housePrice.textContent = `Price: $${price}`;
    houseItem.append(houseName, imgContainer, housePrice);
    return houseItem;
  });
}

const houseItems = createItem(houses);
housesList.append(...houseItems);
about.append(aboutTitle, housesList)