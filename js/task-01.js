const listWithId = document.querySelector('#categories');
const menuItemByTagName = listWithId.querySelectorAll('.item');
console.log("Number of categories: "+ menuItemByTagName.length);
console.log("")

const lista = document.querySelectorAll('.item');
for (let i = 0; i <lista.length; i++){
const listaKategorii= lista[i].querySelectorAll('li');
const tittle = lista[i].querySelector('h2');
console.log(tittle.textContent);
console.log("Elements: "+listaKategorii.length);
console.log("");
}


