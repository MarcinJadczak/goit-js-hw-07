function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const liczba = document.querySelector("[data-create]");
liczba.addEventListener("click", (event) => {
  event.preventDefault();
  const numer = document.querySelector("input").value;
  console.log(numer);
  for (let i = 0; i < numer; i++) {
    const box = document.createElement("div");
    box.style.background = getRandomHexColor();
    box.style.height = 30 + i * 10;
    box.style.width = 30 + i * 10;
    let first = document.querySelector("#boxes");
    first.appendChild(box);
  }
});























// const del = document.querySelector('[data-destroy]');
// del.addEventListener("click",()=>{
//   let first = document.querySelector("#boxes");
//   const coUsuwamy= first.children;
//   coUsuwamy.remove();
// })

// const number = document.querySelector('.number');
// const createButtonEvent= document.querySelector('[data-create]');

// let amount =0
// createButtonEvent.addEventListener("click",() =>{
//   amount = amount + number
// });

// createButtonEvent.addEventListener("click",() =>{
//   const liczba = document.getElementsByTagName('input').value;
//   console.log(liczba);
// });

// function createBoxes(amount){
// for(let item of amount){
// const box =document.createElement('div');
// box.style.background = getRandomHexColor;
// box.style.height += 10;
// box.style.width += 10;
// first = document.querySelector('.boxes');
// first.appendChild(box);
// }

// }
