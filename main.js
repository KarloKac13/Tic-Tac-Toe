"use strict"

// Boolean for switching players
let player1 = true;
let player2 = false;

//all fields by ID
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");

// stored winner/draw/current player strings
const winner = "Player 1 (X) wins!";
const winner2 = "Player 2 (O) wins!";
const draw = "It's a draw!";
const currentPlayer = "Current player: Player 1 (X)";
const currentPlayer2 = "Current player: Player 2 (O)";

//All these are onClick event for each field
function fieldOne() {
  if (player1 === true) {
    one.innerHTML = "X";
    player1 = false;
    document.getElementById("player").innerHTML = currentPlayer2;
    } else {
    one.innerHTML = "O";
    player1 = true;
    document.getElementById("player").innerHTML = currentPlayer;
    };
};

function fieldTwo() {
    if (player1 === true) {
        two.innerHTML = "X";
        player1 = false;
        document.getElementById("player").innerHTML = currentPlayer2;
    } else {
        two.innerHTML = "O";
        player1 = true;
        document.getElementById("player").innerHTML = currentPlayer;
    };
};

function fieldThree() {
    if (player1 === true) {
        three.innerHTML = "X";
        player1 = false;
        document.getElementById("player").innerHTML = currentPlayer2;
    } else {
        three.innerHTML = "O";
        player1 = true;
        document.getElementById("player").innerHTML = currentPlayer;
    };
};

function fieldFour() {
    if (player1 === true) {
        four.innerHTML = "X";
        player1 = false;
        document.getElementById("player").innerHTML = currentPlayer2;
    } else {
        four.innerHTML = "O";
        player1 = true;
        document.getElementById("player").innerHTML = currentPlayer;
    };
};

function fieldFive() {
    if (player1 === true) {
        five.innerHTML = "X";
        player1 = false;
        document.getElementById("player").innerHTML = currentPlayer2;
    } else {
        five.innerHTML = "O";
        player1 = true;
        document.getElementById("player").innerHTML = currentPlayer;
    };
};

function fieldSix() {
    if (player1 === true) {
        six.innerHTML = "X";
        player1 = false;
        document.getElementById("player").innerHTML = currentPlayer2;
    } else {
        six.innerHTML = "O";
        player1 = true;
        document.getElementById("player").innerHTML = currentPlayer;
    };
};

function fieldSeven() {
    if (player1 === true) {
        seven.innerHTML = "X";
        player1 = false;
        document.getElementById("player").innerHTML = currentPlayer2;
    } else {
        seven.innerHTML = "O";
        player1 = true;
        document.getElementById("player").innerHTML = currentPlayer;
    };
};

function fieldEight() {
    if (player1 === true) {
        eight.innerHTML = "X";
        player1 = false;
        document.getElementById("player").innerHTML = currentPlayer2;
    } else {
        eight.innerHTML = "O";
        player1 = true;
        document.getElementById("player").innerHTML = currentPlayer;
    };
};

function fieldNine() {
    if (player1 === true) {
        nine.innerHTML = "X";
        player1 = false;
        document.getElementById("player").innerHTML = currentPlayer2;
    } else {
        nine.innerHTML = "O";
        player1 = true;
        document.getElementById("player").innerHTML = currentPlayer;
    };
};


//Implemented WINNER and DRAW logic
// el.disabled = true; did not work so I improvised
document.querySelectorAll(".mainDivs").forEach(function (el) {
    el.addEventListener("click", function () {
        if (
            one.innerHTML === "X" &&
            two.innerHTML === "X" &&
            three.innerHTML === "X") {
            one.style.color = "red";
            two.style.color = "red";
            three.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.onclick = null;
            });
            document.getElementById("player").innerHTML = winner
        };
        if (one.innerHTML === "X" &&
            five.innerHTML === "X" &&
            nine.innerHTML === "X") {
            one.style.color = "red";
            five.style.color = "red";
            nine.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.onclick = null;
            });
            document.getElementById("player").innerHTML = winner;
        };
        if (one.innerHTML === "X" &&
            four.innerHTML === "X" &&
            seven.innerHTML === "X") {
            one.style.color = "red";
            four.style.color = "red";
            seven.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.onclick = null;
            });
            document.getElementById("player").innerHTML = winner;
        };
        if (two.innerHTML === "X" &&
            five.innerHTML === "X" &&
            eight.innerHTML === "X") {
            two.style.color = "red";
            five.style.color = "red";
            eight.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.onclick = null;
            });
            document.getElementById("player").innerHTML = winner;
        };
        if (three.innerHTML === "X" &&
            six.innerHTML === "X" &&
            nine.innerHTML === "X") {
            three.style.color = "red";
            six.style.color = "red";
            nine.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.onclick = null;
            });
            document.getElementById("player").innerHTML = winner;
        };
        if (four.innerHTML === "X" &&
            five.innerHTML === "X" &&
            six.innerHTML === "X") {
            four.style.color = "red";
            five.style.color = "red";
            six.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.onclick = null;
            });
            document.getElementById("player").innerHTML = winner;
        };
        if (seven.innerHTML === "X" &&
            eight.innerHTML === "X" &&
            nine.innerHTML === "X") {
            seven.style.color = "red";
            eight.style.color = "red";
            nine.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.onclick = null;
            });
            document.getElementById("player").innerHTML = winner;
        };
        if (three.innerHTML === "X" &&
            five.innerHTML === "X" &&
            seven.innerHTML === "X"
        ) {
            three.style.color = "red";
            five.style.color = "red";
            seven.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.onclick = null;
            });
            document.getElementById("player").innerHTML = winner;
        };
        if (
            one.innerHTML === "O" &&
            two.innerHTML === "O" &&
            three.innerHTML === "O") {
            one.style.color = "red";
            two.style.color = "red";
            three.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.onclick = null;
            });
            document.getElementById("player").innerHTML = winner2;
        };
        if (one.innerHTML === "O" &&
            five.innerHTML === "O" &&
            nine.innerHTML === "O") {
            one.style.color = "red";
            five.style.color = "red";
            nine.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.onclick = null;
            });
            document.getElementById("player").innerHTML = winner2;
        };
        if (one.innerHTML === "O" &&
            four.innerHTML === "O" &&
            seven.innerHTML === "O") {
            one.style.color = "red";
            four.style.color = "red";
            seven.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.onclick = null;
            });
            document.getElementById("player").innerHTML = winner2;
        };
        if (two.innerHTML === "O" &&
            five.innerHTML === "O" &&
            eight.innerHTML === "O") {
            two.style.color = "red";
            five.style.color = "red";
            eight.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.onclick = null;
            });
            document.getElementById("player").innerHTML = winner2;
        };
        if (three.innerHTML === "O" &&
            six.innerHTML === "O" &&
            nine.innerHTML === "O") {
            three.style.color = "red";
            six.style.color = "red";
            nine.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.onclick = null;
            });
            document.getElementById("player").innerHTML = winner2;
        };
        if (four.innerHTML === "O" &&
            five.innerHTML === "O" &&
            six.innerHTML === "O") {
            four.style.color = "red";
            five.style.color = "red";
            six.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.onclick = null;
            });
            document.getElementById("player").innerHTML = winner2;
        };
        if (seven.innerHTML === "O" &&
            eight.innerHTML === "O" &&
            nine.innerHTML === "O") {
            seven.style.color = "red";
            eight.style.color = "red";
            nine.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.onclick = null;
            });
            document.getElementById("player").innerHTML = winner2;
        };
        if (three.innerHTML === "O" &&
            five.innerHTML === "O" &&
            seven.innerHTML === "O"
        ) {
            three.style.color = "red";
            five.style.color = "red";
            seven.style.color = "red";
            document.querySelectorAll(".mainDivs").forEach(function (el) {
                el.onclick = null;
            });
            document.getElementById("player").innerHTML = winner2;
        };

//This is the draw logic
//If the player wins by clicking on the last availabe field
//It will show winner, else will show draw
        if(one.innerHTML !== "" &&
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
            nine.style.color !== "red" ) {
            document.getElementById("player").innerHTML = draw;
        };
    });
});

//On window refresh button
//Basically a button that refreshes the page (F5)
function reset() {
    window.location.reload();
};