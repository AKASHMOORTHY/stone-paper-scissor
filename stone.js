const game = ["Stone", "Paper", "Scissor"];
let container = document.querySelector(".container");
let h1 = document.querySelector(".header");
const btn = document.querySelector(".btn");

function start() {
    btn.style.display = "none";

    let r1 = Math.floor(Math.random() * 3);
    let a1 = game[r1];
    console.log(a1);

    let r2 = Math.floor(Math.random() * 3);
    let a2 = game[r2];
    console.log(a2);

    let gameDiv = document.createElement("div");
    gameDiv.classList.add("game");

    let left = document.createElement("div");
    left.classList.add("left");

    let p1 = document.createElement("p");
    p1.innerHTML = a1;
    let he1 = document.createElement("h2");
    he1.innerHTML = "Player 1";
    left.appendChild(he1);
    left.appendChild(p1);

    let right = document.createElement("div");
    right.classList.add("right");

    let p2 = document.createElement("p");
    p2.innerHTML = a2;
    let he2 = document.createElement("h2");
    he2.innerHTML = "Player 2";
    right.appendChild(he2);
    right.appendChild(p2);

    let restartBtn = document.createElement("button");
    restartBtn.classList.add("btn1");
    restartBtn.innerHTML = "RESTART";
    console.log(restartBtn);

    gameDiv.appendChild(left);
    gameDiv.appendChild(right);
    container.appendChild(restartBtn);
    container.appendChild(gameDiv);

    if (a1 === "Stone" && a2 === "Paper") {
        h1.innerHTML = "Player2 Wins";
    } else if (a1 === "Paper" && a2 === "Stone") {
        h1.innerHTML = "Player1 Wins";
    } else if (a1 === "Stone" && a2 === "Scissor") {
        h1.innerHTML = "Player1 Wins";
    } else if (a1 === "Scissor" && a2 === "Stone") {
        h1.innerHTML = "Player2 Wins";
    } else if (a1 === "Paper" && a2 === "Scissor") {
        h1.innerHTML = "Player2 Wins";
    } else if (a1 === "Scissor" && a2 === "Paper") {
        h1.innerHTML = "Player1 Wins";
    } else {
        h1.innerHTML = "DRAW";
    }

    restartBtn.addEventListener("click", function () {
       location.reload();
    });
}