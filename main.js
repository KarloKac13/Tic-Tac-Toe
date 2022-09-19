"use strict"

// Boolean for switching players
let player1 = true;
let player2 = false;

//Selected elements for display
let gameDisplay = document.getElementById("display");
gameDisplay.style.display = "none";
let chooserDisplay = document.getElementById("choose");
chooserDisplay.style.display = true;
let chooserDisplayOptions = document.getElementById("options");
chooserDisplayOptions.style.display = true;

// Stored winner/draw/current player strings
const winner = "Player 1 (X) wins!";
const winner2 = "Player 2 (O) wins!";
const draw = "It's a draw!";
const currentPlayer = "Current player: Player 1 (X)";
const currentPlayer2 = "Current player: Player 2 (O)";

//Displays elements based on click
let chosenX = document.getElementById("x").addEventListener("click", function () {
  gameDisplay.style.display = "flex";
  chooserDisplay.style.display = "none";
  chooserDisplayOptions.style.display = "none";
  player1 = true;
  player2 = false;
  document.getElementById("player").innerHTML = currentPlayer;
});

let chosenO = document.getElementById("o").addEventListener("click", function () {
  gameDisplay.style.display = "flex";
  chooserDisplay.style.display = "none";
  chooserDisplayOptions.style.display = "none";
  player2 = true;
  player1 = false;
  document.getElementById("player").innerHTML = currentPlayer2;
});

// All the game logic // Added options to choose X or O
document.querySelectorAll(".mainDivs").forEach(function (el) {
    el.addEventListener(
      "click", function () {
        console.log(chosenX === true, chosenO === true);
        if (player1 === true) {
          el.innerHTML = "X";
          player1 = false;
          document.getElementById("player").innerHTML = currentPlayer2;
        } else {
          el.innerHTML = "O";
          player1 = true;
          document.getElementById("player").innerHTML = currentPlayer;
        };

          if (
            one.innerHTML === "X" &&
            two.innerHTML === "X" &&
            three.innerHTML === "X"
          ) {
            one.style.color = "red";
            two.style.color = "red";
            three.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.style.pointerEvents = "none";
            });
            document.getElementById("player").innerHTML = winner;
          }
          if (
            one.innerHTML === "X" &&
            five.innerHTML === "X" &&
            nine.innerHTML === "X"
          ) {
            one.style.color = "red";
            five.style.color = "red";
            nine.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.style.pointerEvents = "none";
            });
            document.getElementById("player").innerHTML = winner;
          }
          if (
            one.innerHTML === "X" &&
            four.innerHTML === "X" &&
            seven.innerHTML === "X"
          ) {
            one.style.color = "red";
            four.style.color = "red";
            seven.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.style.pointerEvents = "none";
            });
            document.getElementById("player").innerHTML = winner;
          }
          if (
            two.innerHTML === "X" &&
            five.innerHTML === "X" &&
            eight.innerHTML === "X"
          ) {
            two.style.color = "red";
            five.style.color = "red";
            eight.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.style.pointerEvents = "none";
            });
            document.getElementById("player").innerHTML = winner;
          }
          if (
            three.innerHTML === "X" &&
            six.innerHTML === "X" &&
            nine.innerHTML === "X"
          ) {
            three.style.color = "red";
            six.style.color = "red";
            nine.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.style.pointerEvents = "none";
            });
            document.getElementById("player").innerHTML = winner;
          }
          if (
            four.innerHTML === "X" &&
            five.innerHTML === "X" &&
            six.innerHTML === "X"
          ) {
            four.style.color = "red";
            five.style.color = "red";
            six.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.style.pointerEvents = "none";
            });
            document.getElementById("player").innerHTML = winner;
          }
          if (
            seven.innerHTML === "X" &&
            eight.innerHTML === "X" &&
            nine.innerHTML === "X"
          ) {
            seven.style.color = "red";
            eight.style.color = "red";
            nine.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.style.pointerEvents = "none";
            });
            document.getElementById("player").innerHTML = winner;
          }
          if (
            three.innerHTML === "X" &&
            five.innerHTML === "X" &&
            seven.innerHTML === "X"
          ) {
            three.style.color = "red";
            five.style.color = "red";
            seven.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.style.pointerEvents = "none";
            });
            document.getElementById("player").innerHTML = winner;
          }
          if (
            one.innerHTML === "O" &&
            two.innerHTML === "O" &&
            three.innerHTML === "O"
          ) {
            one.style.color = "red";
            two.style.color = "red";
            three.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.style.pointerEvents = "none";
            });
            document.getElementById("player").innerHTML = winner2;
          }
          if (
            one.innerHTML === "O" &&
            five.innerHTML === "O" &&
            nine.innerHTML === "O"
          ) {
            one.style.color = "red";
            five.style.color = "red";
            nine.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.style.pointerEvents = "none";
            });
            document.getElementById("player").innerHTML = winner2;
          }
          if (
            one.innerHTML === "O" &&
            four.innerHTML === "O" &&
            seven.innerHTML === "O"
          ) {
            one.style.color = "red";
            four.style.color = "red";
            seven.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.style.pointerEvents = "none";
            });
            document.getElementById("player").innerHTML = winner2;
          }
          if (
            two.innerHTML === "O" &&
            five.innerHTML === "O" &&
            eight.innerHTML === "O"
          ) {
            two.style.color = "red";
            five.style.color = "red";
            eight.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.style.pointerEvents = "none";
            });
            document.getElementById("player").innerHTML = winner2;
          }
          if (
            three.innerHTML === "O" &&
            six.innerHTML === "O" &&
            nine.innerHTML === "O"
          ) {
            three.style.color = "red";
            six.style.color = "red";
            nine.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.style.pointerEvents = "none";
            });
            document.getElementById("player").innerHTML = winner2;
          }
          if (
            four.innerHTML === "O" &&
            five.innerHTML === "O" &&
            six.innerHTML === "O"
          ) {
            four.style.color = "red";
            five.style.color = "red";
            six.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.style.pointerEvents = "none";
            });
            document.getElementById("player").innerHTML = winner2;
          }
          if (
            seven.innerHTML === "O" &&
            eight.innerHTML === "O" &&
            nine.innerHTML === "O"
          ) {
            seven.style.color = "red";
            eight.style.color = "red";
            nine.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.style.pointerEvents = "none";
            });
            document.getElementById("player").innerHTML = winner2;
          }
          if (
            three.innerHTML === "O" &&
            five.innerHTML === "O" &&
            seven.innerHTML === "O"
          ) {
            three.style.color = "red";
            five.style.color = "red";
            seven.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.style.pointerEvents = "none";
            });
            document.getElementById("player").innerHTML = winner2;
          }

          //This is the draw logic
          //If the player wins by clicking on the last availabe field
          //It will show winner, else will show draw
          if (
            one.innerHTML !== "" &&
            two.innerHTML !== "" &&
            three.innerHTML !== "" &&
            four.innerHTML !== "" &&
            five.innerHTML !== "" &&
            six.innerHTML !== "" &&
            seven.innerHTML !== "" &&
            eight.innerHTML !== "" &&
            nine.innerHTML !== "" &&
            one.style.color !== "red" &&
            two.style.color !== "red" &&
            three.style.color !== "red" &&
            four.style.color !== "red" &&
            five.style.color !== "red" &&
            six.style.color !== "red" &&
            seven.style.color !== "red" &&
            eight.style.color !== "red" &&
            nine.style.color !== "red"
          ) {
            document.getElementById("player").innerHTML = draw;
          }
      }, { once: true });
});

//On window refresh button
//Basically a button that refreshes the page (F5)
function reset() {
    window.location.reload();
};