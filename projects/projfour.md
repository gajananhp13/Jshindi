# project of dom  guess the number game

## project link 
[click here bhai ](  https://stackblitz.com/edit/dom-project-chaiaurcode-ebzt6omq?file=4-GuessTheNumber%2Findex.html,4-GuessTheNumber%2Fchaiaurcode.js    )

solution of javascript
``` javascript

const randomnum = Math.round(Math.random() * 100 + 1);
console.log(randomnum);


const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');

const loworhigh = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevguess = [];
let numguess = 1;

let playgame = true;
if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    console.log(guess);
    validateguess(guess);
  });
}

function validateguess(guess) {
  if (isNaN(guess)) {
    alert('plesas enter a  number');
  } else if (guess < 1 || guess > 100) {
    alert('plesas enter a valid number');
  }
  prevguess.push(guess);

  if (numguess == 11) {
    displayguess(guess);
    displaymessage(`game over ${randomnum}`);
    endgame();
  } else {
    displayguess(guess);
    checkguess(guess);
  }
}

function checkguess(guess) {
  if (guess == randomnum) {
    displaymessage('Yes, it is correct!');
    endGame();
  } else if (guess < randomnum) {
    displaymessage('Number is low');
  } else {
    displaymessage('Number is high');
    // endgame();
  }
}
function displayguess(guess) {
  //clean up guess
  userinput.value = '';
  guessslot.innerHTML += `${guess} -`;
  numguess++;
  remaining.innerHTML = `${11 - numguess}`;
}

function displaymessage(message) {
  loworhigh.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  userinput.value = ''; //value get cleared
  userinput.setAttribute('disabled', ' ');
  p.classList.add('button');
  p.innerText = 'khatam kar ';
  p.innerHTML = `<button id="newgame">start new game</button>`;
  startover.appendChild(p);
  playgame = false;
}
function newgame() {
  const newgamebutton = document.getElementById('#newgame');
  newgamebutton.addEventListener(function (e) {
    const randomnum = Math.round(Math.random() * 100 + 1);
    let prevguess = [];
    let numguess = 1;
    guessslot.innerHTML = ``;
    remaining.innerHTML = `${11 - numguess}`;

    userinput.removeAttribute('disabled');
    startover.removeChild(P);
    playgame = true;
  });
}

