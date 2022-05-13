function computerPlay(){
    let randomChoice=Math.floor((Math.random() *3));
    if (randomChoice==0){
        return "rock";
    }
    else if (randomChoice==1){
        return "paper";
    }
    return "scissors";

}


function playRound(computerSelection,playerSelection){
    const computerResults=document.querySelector('#computer');
    if ((computerSelection=="paper" && playerSelection=="rock")||(computerSelection=="scissors" && 
            playerSelection=="paper")||(computerSelection=="rock" && playerSelection=="scissors")){
        return "Computer Wins";
    }
    else if(computerSelection==playerSelection)
    {
        return "Draw"
    }
    
    return "Player Wins";
}

function game(playerSelection){

    const resultsDiv=document.querySelector('#results');    
    let computerScore=document.querySelector('#computerScore');
    let curCompScore=parseInt(computerScore.textContent);
    let playerScore=document.querySelector('#playerScore');
    let curPlayerScore=parseInt(playerScore.textContent);

    
    


    let roundOutcome=playRound(computerPlay(),playerSelection);
    
    if(roundOutcome=="Computer Wins"){
        computerScore.textContent=curCompScore+1;
    }
    else{
        playerScore.textContent=curPlayerScore+1;
    }
    if(computerScore.textContent==5){
        resultsDiv.textContent="Computer Wins";
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
    }
    if(playerScore.textContent==5){
        resultsDiv.textContent="Player Wins";
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
    }
    
    //currentScore=parseInt(currentScore);



    

}

const rockBtn=document.querySelector('#rock');
const paperBtn=document.querySelector('#paper');
const scissorsBtn=document.querySelector('#scissors');
       

rockBtn.addEventListener('click', () => {
    game('rock');
});

paperBtn.addEventListener('click', () => {
    game('paper');
});

scissorsBtn.addEventListener('click', () => {
    game('scissors');
});
