let gameseq = [];
let user = [];
let started = false;
let level = 0;
let h2 = (di = document.querySelector('h2'));
let btns = ['red', 'yellow', 'green', 'aqua'];

document.addEventListener('keypress', function () {
    if (!started) {
        console.log('Game started');
        started = true;
        levelup();
    }
});

function levelup() {
    //reset all user input value
    user = [];
    level++;
    h2.innerText = `Level Up ${level}`;
    let randomx = Math.floor(Math.random() * 4);
    let randomy = btns[randomx];
    let ranbtn = document.querySelector(`.${randomy}`);
    gameseq.push(randomy);
    console.log(gameseq);
    btnflash(ranbtn);
}

function btnflash(btn) {
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove('flash');
    }, 300);
}

function userflash(btn) {
    btn.classList.add('userflash');
    setTimeout(function () {
        btn.classList.remove('userflash');
    }, 300);
}

function checked() {
    let idx = user.length - 1;
    if (user[idx] === gameseq[idx]) {
        if (user.length == gameseq.length) {
            setTimeout(levelup, 900);
        }
        // console.log('Correct input');
    } else {
        h2.innerHTML = `Game over! Press any key to start`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';
        },200);
        // Reset the game state
        reset();
    }
}
function reset(){
    gameseq = [];
    user = [];
    started = false;
    level = 0;
}

function btnpress() {
    console.log(this);
    let btn = this;
    userflash(btn);
    let usercolor = btn.getAttribute('id');
    user.push(usercolor);
    // console.log(user);
    checked();
}

let allbtns = document.querySelectorAll('.btn');
for (let btn of allbtns) {
    btn.addEventListener('click', btnpress);
}
