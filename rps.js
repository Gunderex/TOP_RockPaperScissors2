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
                    
                const resultPlayerScore = document.createElement("span");
                resultPlayerScore.classList.add("resultPlayerSpan");
                resultPlayerScore.textContent = playerScore;

                const resultCPUScore = document.createElement("span");
                resultCPUScore.classList.add("resultCPUSpan");
                resultCPUScore.textContent = cpuScore;
                
                resultsDiv.appendChild(resultPlayerScore);
                resultsDiv.appendChild(resultPlayerScore);

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
            const playerSelection = event.target.id;
            console.log(playerSelection);
            playRound(playerChoice);
         }

const choiceDiv = document.querySelector("#choiceDiv");
const resultsDiv = document.querySelector("#resultsDiv");

const rockBtn = document.querySelector("#rock").addEventListener("click", clickListener);
const paperBtn = document.querySelector("#paper").addEventListener("click", clickListener);
const scissorsBtn = document.querySelector("#scissors").addEventListener("click", clickListener);




        






        