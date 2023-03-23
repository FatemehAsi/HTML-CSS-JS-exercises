'use strict'
const numberEl = document.querySelector('.number');
const messageEl = document.querySelector('.message');
const guessEl = document.querySelector('.guess');
const btnCheckEl = document.querySelector('.btn--check');
const btnAgainEL = document.querySelector('.btn--again');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

btnCheckEl.addEventListener('click' , function(){

    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        messageEl.textContent = "No number!"
    }

    else if(guess === secretNumber){
            messageEl.textContent = "Correct Number!";
            document.querySelector('body').style.backgroundColor = "#60b347";
            // highscoreEl.textContent = score;
            document.querySelector('.number').style.width = "30rem";

            if(score > highscore){
                highscore = score;
                highscoreEl.textContent = highscore;
            }else{
                highscore = highscore;
                highscoreEl.textContent = highscore;
            }

    }else if(guess > secretNumber){

        if (score > 1){
            messageEl.textContent = "Too high!";
            score--;
            scoreEl.textContent = score;
        }else{
            messageEl.textContent = "You lost the game!";
            scoreEl.textContent = 0;
        }
            
    }else if(guess < secretNumber){

            if (score > 1){
                messageEl.textContent = "Too low!";
                score--;
                scoreEl.textContent = score;
            }else{
                messageEl.textContent = "You lost the game!";
                scoreEl.textContent = 0;
            }
    }
});

btnAgainEL.addEventListener('click' , function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;

    document.querySelector('.number').textContent = "?";
    messageEl.textContent = "Start guessing...";
    scoreEl.textContent = score;
    document.querySelector('body').style.backgroundColor = "#222";
    guessEl.value = "";
    document.querySelector('.number').style.width = "15rem";

});