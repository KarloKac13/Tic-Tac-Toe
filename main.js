"use strict"

// Boolean for switching players
let player1 = true;
let player2 = false;

//All fields by ID
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");

// Stored winner/draw/current player strings
const winner = "Player 1 (X) wins!";
const winner2 = "Player 2 (O) wins!";
const draw = "It's a draw!";
const currentPlayer = "Current player: Player 1 (X)";
const currentPlayer2 = "Current player: Player 2 (O)";

// All the game logic
document.querySelectorAll(".mainDivs").forEach(function (el) {
    el.addEventListener(
      "click", function () {
        if (player1 === true) {
          el.innerHTML = "X";
          player1 = false;
          document.getElementById("player").innerHTML = currentPlayer2;
        } else {
          el.innerHTML = "O";
          player1 = true;
          document.getElementById("player").innerHTML = currentPlayer;
          }
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