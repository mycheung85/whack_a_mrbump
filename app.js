const holes = document.querySelectorAll('.field');
const scoreBoard = document.querySelector('.score');
const mrbump = document.querySelectorAll('.mrbump');
let lastHole;
let timeUp = false;
let playerScore = [{}]


function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  let idx = Math.floor(Math.random() * holes.length);
  let hole = holes[idx]

  if(hole === lastHole) {
    return randomHole(holes)
  }
  lastHole =  hole;
  return hole;
}


function peep() {
  const time = randTime(100, 1000);
  const hole = randomHole(holes)
  console.log(time, hole)
  hole.classList.add('up')
  setTimeout(() => {
    hole.classList.remove('up');
    if(!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.innerHTML = 0;
  timeUp = false;
  score = 0;
  peep()
  setTimeout(() => timeUp = true, 10000)
}

function bonk(e) {
  console.log(e)
  if(!e.isTrusted) return;
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score
}

mrbump.forEach(mrbump => mrbump.addEventListener('click', bonk ))


// if the add player button is clicked this is then added to an array
// 
function addPlayer() {
  let newPlayer = prompt("Please enter your name?").toUpperCase();

}