function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const liczba = document.querySelector("[data-create]");
liczba.addEventListener("click", (event) => {
  event.preventDefault();
  const numer = document.querySelector("input").value;
  for (let i = 0; i < numer; i++) {
    const box = document.createElement("div");
    box.style.background = getRandomHexColor();
    box.style.height = 30 + i * 10 +"px";
    box.style.width = 30 + i * 10+ "px";
    let first = document.querySelector("#boxes");
    first.appendChild(box);
  }
});



const del = document.querySelector('[data-destroy]');
del.addEventListener("click",()=>{
  let first = document.querySelector("#boxes");
  first.innerHTML = "";
})


