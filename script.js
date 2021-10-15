'use strict';

let secretNumber=Math.trunc(Math.random()*20)+1;
// const number=Math.floor(Math.random()*21);
let score=20;
let highScore=0;

function displayMessage(message){
    document.querySelector('.message').textContent=message;
}
function setScore(score){
    document.querySelector('.score').textContent=score;
}
document.querySelector('.number').textContent='?';


document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess);
    
    if(!guess){
        displayMessage('💢 No Number');
    } else if(guess===secretNumber)
    {
        displayMessage('👏 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';

        if(highScore<score)
        {
            highScore=score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess!==secretNumber)
    {
        if (score>1)
        {
            displayMessage(guess>secretNumber?'↗ Too high!':'↘ Too low!');
            score--;
            setScore(score);
        } else {
            displayMessage('💥 You lost the game');
            setScore(0);
        }
        
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber=Math.trunc(Math.random()*20)+1;
    score=20;

    displayMessage('Start Guesssing...');
    document.querySelector('body').style.backgroundColor = '#222';
    setScore(score);
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
});