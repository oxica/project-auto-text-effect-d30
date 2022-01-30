const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text =
  "I love coding because it really excites me, it is fun to do. It really excites me whenever I come across a problem, I get curious about solving it. I am a person who loves to solve puzzles, questions involving logic and thinking ability.";
let i = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, i);

  i++;

  if (i > text.length) {
    i = 1;
  }
  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => speed = 300 / e.target.value);
