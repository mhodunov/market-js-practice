import "../css/contacts.css";
import refs from "../js/refs.js";

const { contacts } = refs;
const game = ["rock", "scissors", "paper"];

function createBtns(arr) {
  return arr.map(el => {
   const btn = document.createElement("button");
   btn.textContent = el;
   btn.dataset.value = el;
   return btn;
  })
}

const buttons = createBtns(game);
contacts.append(...buttons);


function rndmIdx(array) {
  return Math.round(Math.random()*(array.length - 1));
}

contacts.addEventListener('click', onBtnClick);

function onBtnClick (event) {

  let user = event.target.dataset.value;
  let comp = game[rndmIdx(game)];
  
  if(user===comp) return alert(`Computer choose ${comp}\nDraw`);
  else if(user === "rock") {
    if(comp === "scissors") return alert(`Computer choose ${comp}\nYou win`);
    if(comp === "paper") return alert(`Computer choose ${comp}\nYou loose`);
  }
  else if(user === "scissor"){
    if(comp === "paper") return alert(`Computer choose ${comp}\nYou win`);
    if(comp === "rock") return alert(`Computer choose ${comp}\nYou loose`);
  }
  else if(user === "paper"){
    if(comp === "rock") return alert(`Computer choose ${comp}\nYou win`);
    if(comp === "scissors") return alert(`Computer choose ${comp}\nYou loose`);
  }
}
