const btns = document.querySelectorAll(".btn");
const h3El = document.querySelector("h3");
const startbtn = document.getElementById("start");
let second = document.getElementById("user__time");
const num = document.getElementById("user__score");
let count = 0;

let time = 5;
let timer;

function RundomNum(to) {
  return Math.ceil(Math.random() * to);
}

let isgameover;

function startGame() {
  clearInterval(timer);
  time = 10;
  second.textContent = `${time}s`;
  timer = setInterval(() => {
    if (time == 0) {
      showTimeoutModal();
    } else {
      time--;
      second.textContent = `${time}s`;
    }
    if (answer === result) {
      time += 3;
    }

    if(count == 5){
      alert("you are win")
    }
  }, 1000);

  isgameover = false;
  let num1 = RundomNum(100);
  let num2 = RundomNum(100);
  const result = num1 + num2;

  h3El.textContent = `${num1} + ${num2} = ? `;

  const answer = [result - 2, result + 2, result + 1];

  answer[RundomNum(3)- 1] = result;

  btns.forEach((btn, index) => {
    btn.textContent = answer[index];

    btn.addEventListener("click", () => {
      if (!isgameover) {
        if (+btn.textContent === result) {
          alert("Cool 🦾");
          count++;
          num.textContent = count; 
        } else {
          alert("Do it again till You Win ✔");
        }

        isgameover = true;
        clearInterval(timer);
        setTimeout(startGame, 2000); 
      }
    });
  });
}

startbtn.addEventListener("click", startGame);
