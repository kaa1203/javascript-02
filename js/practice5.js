const player = document.querySelector("#playerBtn");
const bot = document.querySelector("#botBtn");
const overlay = document.querySelector(".overlay");
const tds = document.querySelectorAll("td");
const tbody = document.querySelector("tbody");
const result = document.querySelector("h2");

let mode = 0;

bot.addEventListener("click", () => {
  mode = 1;
  overlay.style.visibility = "hidden";
  botMove();

  tds.forEach(td => {
    td.addEventListener("click", () => {
      if (td.innerText === "") {
        td.innerText = "O";
        botMove();
      }
      scoreChecker();
    });
  });

});

const clearBoard = () => tds.forEach(td => location.reload());


function botMove() { 
  let bot = Math.floor(Math.random() * 9);
  tds[bot].innerText === "" ? tds[bot].innerText = "X" : botMove();
}

function scoreChecker() {
  switch (true) {
    case tds[0].innerText === "O" && tds[1].innerText === "O" && tds[2].innerText === "O":
    case tds[0].innerText === "O" && tds[3].innerText === "O" && tds[6].innerText === "O":
    case tds[0].innerText === "O" && tds[4].innerText === "O" && tds[8].innerText === "O":
    case tds[1].innerText === "O" && tds[4].innerText === "O" && tds[7].innerText === "O":
    case tds[2].innerText === "O" && tds[4].innerText === "O" && tds[6].innerText === "O":
    case tds[2].innerText === "O" && tds[5].innerText === "O" && tds[8].innerText === "O":
    case tds[3].innerText === "O" && tds[4].innerText === "O" && tds[5].innerText === "O":
    case tds[6].innerText === "O" && tds[7].innerText === "O" && tds[8].innerText === "O":
      mode === 0 ? result.innerText = "Player Two Win!" : result.innerText = "Player Win!";
      overlay.style.visibility = "visible";
      setTimeout(clearBoard, 700);
      break;
    case tds[0].innerText === "X" && tds[1].innerText === "X" && tds[2].innerText === "X":
    case tds[0].innerText === "X" && tds[3].innerText === "X" && tds[6].innerText === "X":
    case tds[0].innerText === "X" && tds[4].innerText === "X" && tds[8].innerText === "X":
    case tds[1].innerText === "X" && tds[4].innerText === "X" && tds[7].innerText === "X":
    case tds[2].innerText === "X" && tds[4].innerText === "X" && tds[6].innerText === "X":
    case tds[2].innerText === "X" && tds[5].innerText === "X" && tds[8].innerText === "X":
    case tds[3].innerText === "X" && tds[4].innerText === "X" && tds[5].innerText === "X":
    case tds[6].innerText === "X" && tds[7].innerText === "X" && tds[8].innerText === "X":
      mode === 0 ? result.innerText = "Player One Win!" : result.innerText = "Bot Win!";
      overlay.style.visibility = "visible";
      setTimeout(clearBoard, 800);
      break;
    case tds[0].innerText !== "" && tds[1].innerText !== "" && tds[2].innerText !== ""
      && tds[3].innerText !== "" && tds[4].innerText !== "" && tds[5].innerText !== ""
      && tds[6].innerText !== "" && tds[7].innerText !== "" && tds[8].innerText !== "": 
      overlay.style.visibility = "visible";
      result.innerText = "It's a Tie!";
      setTimeout(clearBoard, 800);
  }
}


let isTurnFinish = false;
player.addEventListener("click", () => {
  mode = 0;
  overlay.style.visibility = "hidden";
  tds.forEach(td => {
    td.addEventListener("click", () => {
      if (td.innerText === "") {
        if (!isTurnFinish) {
          td.innerText = "X";
          isTurnFinish = true;
          scoreChecker();
        } else {
          td.innerText = "O";
          isTurnFinish = false;
          scoreChecker();
        }
      }
    });
  });
});
