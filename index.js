var random1 = Math.floor(Math.random()*6) + 1;

var randomDiceImage1 = "dice"+random1+".png";

var imgSrc1 = "images/"+randomDiceImage1;

var img1 = document.querySelectorAll("img")[0];   
img1.setAttribute("src", imgSrc1); 

var random2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage2 = "dice"+random2+".png";

var imgSrc2 = "images/"+randomDiceImage2;

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", imgSrc2);


if( random1 > random2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(random2>random1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "It's a draw :/";
}