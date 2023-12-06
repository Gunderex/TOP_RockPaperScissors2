let rps = ["rock", "paper", "scissors"];
        let outcome = "";
        let playerChoice = "";
        let computerSelection = "";
        let playerScore = 0;
        let cpuScore = 0;
        
        /* Returns random value from rps array to be CPU player's choice */
        function getComputerChoice(rps) {
        return rps[Math.floor(Math.random() * rps.length)];    
        };

        /* Begins a new round and gathers new player/CPU input.  Compares the two to generate an outcome.  */
        function playRound(playerChoice) {
            computerSelection = getComputerChoice(rps);
            if (playerChoice == computerSelection) {
                        outcome = "Tie!"
                    } else if ((playerChoice == "rock" && computerSelection == "scissors") || (playerChoice == "paper" && computerSelection == "rock") || (playerChoice == "scissors" && computerSelection == "paper")) {
                        outcome = "Win!"
                    } else outcome = "Lose!"
                    scoreRound(outcome);
                    console.log(playerScore);
                    console.log(cpuScore);

                    resultPlayerScore.textContent = playerScore;
                    resultCPUScore.textContent = cpuScore;
                    roundPlayer.textContent = playerChoice;
                    roundCPU.textContent = computerSelection;
                    roundOutcome.textContent = outcome;

            if (playerScore == 5) {
                alert("Congratulations!\nYou Win!\nReload to play again.");
            } else if (cpuScore == 5) {
                alert("Too Bad\nYou Lose\nReload to play again")
            }
                };
        
        /* Takes the current outcome value and updates the player/CPU scores. */
        function scoreRound(outcome) {
            if (outcome == "Win!") {
                playerScore = playerScore+1
            } else if (outcome == "Lose!") {
                cpuScore = cpuScore+1;
            }
            return playerScore, cpuScore;
        }

        /* Event handler for on click.  On button click passes button id as player choice
        then runs playRound */
        function clickListener(event) {
            // Exit, if not a button was clicked
            if (event.target.tagName !== "BUTTON") {
               return;
            }
            playerChoice = event.target.id;
            playRound(playerChoice);
         }

const choiceDiv = document.querySelector("#choiceDiv");
const resultsDiv = document.querySelector("#resultsDiv");

const rockBtn = document.querySelector("#rock").addEventListener("click", clickListener);
const paperBtn = document.querySelector("#paper").addEventListener("click", clickListener);
const scissorsBtn = document.querySelector("#scissors").addEventListener("click", clickListener);

const resultPlayerScore = document.querySelector("#playerSpan");
const resultCPUScore = document.querySelector("#cpuSpan");
const roundPlayer = document.querySelector("#playerRoundSpan");
const roundCPU = document.querySelector("#cpuRoundSpan");
const roundOutcome = document.querySelector("#outcomeSpan");







        






        