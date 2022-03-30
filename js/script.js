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

function game(){
    
    for(let i=0; i<5; i++){
        let playerSelection=prompt("enter rock, paper, scissors:");
        console.log(playRound(computerPlay(),playerSelection));
    }
}

game();