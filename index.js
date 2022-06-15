// Player 1

let randomNumber1 = Math.floor(Math.random() * 6 + 1);    // random number 1- 6

let randomImage1 = "dice" + randomNumber1 + ".png";       // dice1.png - dice6.png

let randomImageSource1 = "./images/" + randomImage1;       // images/dice1.png - images/dice6.png

let image1 = document.querySelector(".img1").setAttribute("src", randomImageSource1);   // target img1 and set src attribute


// Player 2

let randomNumber2 = Math.floor(Math.random() * 6 + 1);

let randomImage2 = "dice" + randomNumber2 + ".png";

let randomImageSource2 = "./images/" + randomImage2;

let image2 = document.querySelector(".img2").setAttribute("src", randomImageSource2);


// Determine who's player win

if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}else {
  document.querySelector("h1").innerHTML = "Draw!";
}