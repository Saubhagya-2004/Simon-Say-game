let gameseq=[];
let user=[];
let started=false;
let level=0;
let h2=di=document.querySelector('h2');
let btns=['red','green','yellow','blue'];
document.addEventListener('keypress',function(){
    if(started==false){
        console.log('game is started')
        started=true;
        levelup();
    }
});
function levelup(){
    level++;
    h2.innerText=`level Up ${level}`;
    let randomx=Math.floor(Math.random()*3);
    let randomy=btns[randomx];
    let ranbtn=document.querySelector(`.${randomy}`);
    // console.log(randomx);
    // console.log(randomy);
    // console.log(ranbtn);
    gameseq.push(randomy);
    console.log(gameseq);
    btnflash(ranbtn);
}
function btnflash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },300);
};
// function gameflash(btn){
//     btn.classList.add('flash');
//     setTimeout(function(){
//         btn.classList.remove('flash');
//     },300);
// };
function userflash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash');
    },300);
};
function checked(){
    console.log('check level',level);
}
function btnpress(){
console.log(this);
let btn=this;
userflash(btn);
usercolor=btn.getAttribute('id');
user.push(usercolor)
console.log(user);
checked();
};
let allbtns= document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener('click',btnpress);
};