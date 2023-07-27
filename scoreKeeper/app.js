const playerOneButton = document.querySelector("#p1Button")
const playerTwoButton = document.querySelector("#p2Button")
const WinningScoreSelect = document.querySelector("#playTo")


const playerOneDisplay = document.querySelector("#p1Display")

const winby2 = document.querySelector("#win2")


const playerTwoDisplay = document.querySelector("#p2Display")
const resetButton = document.querySelector("#reset")


let p1Score = 0
let p2Score = 0
let winningScore = 3;
let isGameOver = false
let isWin2 = false;

winby2.addEventListener('change', function(){
    if(winby2.checked === true){
        isWin2 = true;
    }
    else{
        isWin2 = false;
    }
})


WinningScoreSelect.addEventListener('change', function(){
    reset();
    winningScore = parseInt(WinningScoreSelect.value);
})

playerOneButton.addEventListener('click', function(){
    p1Score = updateScore(p1Score,p2Score, playerOneDisplay, playerTwoDisplay, winningScore);

})

playerTwoButton.addEventListener('click', function(){
    p2Score = updateScore(p2Score,p1Score, playerTwoDisplay, playerOneDisplay, winningScore);

})



resetButton.addEventListener('click', reset)

function reset(){
    p1Score = 0
    p2Score = 0
    isGameOver = false
    playerOneDisplay.innerHTML = 0
    playerTwoDisplay.innerHTML = 0
    playerTwoDisplay.classList.remove("has-text-success","has-text-danger")
    playerOneDisplay.classList.remove("has-text-danger","has-text-success")
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;
    winningScore = parseInt(WinningScoreSelect.value);
}

function updateScore (score,score2, display, display2){
    if(!isGameOver){
        score++
        console.log("here")
        if(isWin2 === true && (score - score2) < 2 && score === winningScore){
            console.log("hereeee")
            winningScore++;
        }
        if (score === winningScore){
            isGameOver = true
            display.classList.add("has-text-success")
            display2.classList.add("has-text-danger")
            playerOneButton.disabled = true;
            playerTwoButton.disabled = true;
        }
        console.log("here")
        display.innerHTML = score + ""
        return score;
}
}