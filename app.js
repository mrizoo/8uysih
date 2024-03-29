const btns = document.querySelectorAll(".btn");
const h3El = document.querySelector("h3");
const startbtn = document.getElementById("start");
let second = document.getElementById("user__time");
let time = 10;
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
    
  }, 1000);

  isgameover = false;
  let num1 = RundomNum(100);
  let num2 = RundomNum(100);
  const result = num1 + num2;

  h3El.textContent = `${num1} + ${num2} = ? `;

  const answer = [result - 2, result + 2, result +1];

  answer[Math.floor(Math.random() * 3)] = result;


  btns.forEach((btn, index) => {
    btn.textContent = answer[index];

    btn.addEventListener("click", () => {
      if (!isgameover) {
        if (+btn.textContent === result) {
          alert("Cool 🦾");
        } else {
          alert("Do it again till You Win ✔");
        }

        isgameover = true;
        clearInterval(timer);
        setTimeout(startGame, 1000); 

      }
    });
  });
}

startbtn.addEventListener("click", startGame);
