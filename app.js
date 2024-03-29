const btns = document.querySelectorAll(".btn");

const h3El = document.querySelector("h3");
const restartbtn = document.getElementById("restart");

function RundomNum(to) {
  return Math.ceil(Math.random() * 100) ;
}

let isgameover;

function startGame() {
  isgameover = false;
  let num1 = RundomNum(100);
  let num2 = RundomNum(100);
  const result = num1 + num2;

  h3El.textContent = `${num1} + ${num2} = ? `;

  const answer = [result - 2, result + 2, result + 1];

  answer[RundomNum(3) -1] = result;

  btns.forEach((btn, index) => {
    btn.textContent = answer[index];

    btn.addEventListener("click", () => {
      if (!isgameover) {
        if (+btn.textContent === result) {
          alert("true");
        } else {
          alert("wrong");
        }

        isgameover = true;
      }
    });
  });
}

startGame();

restartbtn.addEventListener("click", startGame);
