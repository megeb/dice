function myFunction() {
  let counterP1 = 0;
      counterP2 = 0;
      randomNumber1 = Math.floor(Math.random() * 6) + 1;
      randomNumber1img = "images/dice" + randomNumber1 + ".png";
      randomNumber2 = Math.floor(Math.random() * 6) + 1;
      randomNumber2img = "images/dice" + randomNumber2 + ".png";
  document.querySelector(".img1").setAttribute("src", randomNumber1img);
  document.querySelector(".img2").setAttribute("src", randomNumber2img);
      x = document.getElementById("playerName1").value;
  document.getElementById("playerName1").innerHTML = x;
     y = document.getElementById("playerName2").value;
  document.getElementById("playerName2").innerHTML = y;
  if (randomNumber1 > randomNumber2) {
    counterP1 = document.querySelector(".p1Counter").innerHTML;
    counterP1++;
    counterP1.innerHTML = counterP1;
    counterP2 = document.querySelector(".p2Counter").innerHTML;
    counterP2--;
    counterP2.innerHTML = counterP2;
    document.querySelector(".top").innerHTML = x + " Win!";
    document.querySelector(".whosTurn").innerHTML = x + "'s" + " Turn";
    document.querySelector(".p1Counter").innerHTML = counterP1;
    document.querySelector(".p2Counter").innerHTML = counterP2;
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector(".top").innerHTML = y + " Win!";
    document.querySelector(".whosTurn").innerHTML = y + "'s" + " Turn";
    counterP1 = document.querySelector(".p1Counter").innerHTML;
    counterP1--;
    counterP1.innerHTML = counterP1;
    counterP2 = document.querySelector(".p2Counter").innerHTML;
    counterP2++;
    counterP2.innerHTML = counterP2;
    document.querySelector(".p1Counter").innerHTML = counterP1;
    document.querySelector(".p2Counter").innerHTML = counterP2;
  } else {
    document.querySelector(".top").innerHTML = "Draw!";
    document.querySelector(".whosTurn").innerHTML = "Take a Turn";
  }
}
