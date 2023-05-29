const colors= ["green", "red", "rgba(133, 122,342)", "#f12373"];
const btn = document.getElementById("btn");
const color = document.querySelector('.color');

btn.addEventListener("click", function(){

//console.log(document.body);
// get Number beetween [0-3]
const randomeNumber = getRandomNumber();
console.log(randomeNumber);

document.body.style.background = colors[randomeNumber];
color.textContent = colors[randomeNumber];
});
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}


