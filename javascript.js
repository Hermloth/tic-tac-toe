
var activePlayer = 0;
const winnerDisplay = document.querySelector(".winnerDisplay");
const turnDisplay = document.querySelector(".playerTurnDisplay");
var gameState = 0;


function RefreshPlayerStats(){
// if player 1 existis set up frame
if(playerArray[0] != null){
    if (document.contains(document.getElementById("addPlayer1Button"))) {
        let player1Button = document.getElementById("addPlayer1Button");
        player1Button.remove();
        } 
    
    let player1Container = document.querySelector("#player1StatsContainer");
    player1Container.replaceChildren();
    let player1Label = document.createElement("div");
    player1Label.classList.add("playerLabel");
    player1Label.textContent = playerArray[0].getName() + " (Player1) - X's";
    player1Container.appendChild(player1Label);
    
    let playerScoreLabel = document.createElement("div");
    playerScoreLabel.classList.add("playerScore");
    playerScoreLabel.textContent = "Score: "+ playerArray[0].getScore();
    player1Container.appendChild(playerScoreLabel);

}
if (playerArray[1] != null){

    if (document.contains(document.getElementById("addPlayer2Button"))) {
        let player2Button = document.getElementById("addPlayer2Button");
        player2Button.remove();
        } 

    let player2Container = document.querySelector("#player2StatsContainer");
    player2Container.replaceChildren();
    let player2Label = document.createElement("div");
    player2Label.classList.add("playerLabel");
    player2Label.textContent = playerArray[1].getName() + " (Player2) - O's";
    console.log(player2Label);
    player2Container.appendChild(player2Label);
    console.log(player2Container);

    let playerScoreLabel = document.createElement("div");
    playerScoreLabel.classList.add("playerScore");
    playerScoreLabel.textContent = "Score: "+ playerArray[1].getScore();
    player2Container.appendChild(playerScoreLabel);
}
}

const resetButton = document.querySelector(".resetBoardButton");
resetButton.addEventListener("click", ResetBoard);

function ResetBoard(){
    console.log("reset called");
        let gameBoard = document.querySelector(".gameBoard");
        gameBoard.replaceChildren();
        let cellNumber = 0
        for (let r=0; r<3; r++){
        let row = document.createElement("div");
        row.classList.add("boardRow")
        for (let i = 1; i<4; i++){
            let gameCell = document.createElement("div");
            gameCell.id = cellNumber;
            gameCell.classList.add("boardCell")
            gameCell.addEventListener("click", () => {

                if (gameCell.textContent != ""){
                    alert("Space already taken, choose another");
                } else if (playerArray.length < 2){
                    alert("not enough players, add some first");
                } else if (gameState == 1){
                    alert("The game is over, start a new one");
                } else {
                if (activePlayer == 0){
                    gameCell.textContent = "X";
                    gameState[gameCell.id] = "X";
                    evaluateGame(gameState);
                    activePlayer = 1;
                    updateActivePlayer();
                } else {
                    gameCell.textContent = "O";
                    gameState[gameCell.id] = "O";
                    evaluateGame(gameState);
                    activePlayer = 0;
                    updateActivePlayer();
                }
            }
            })
    
            function updateActivePlayer(){
                if (playerArray.length>0){
                if(activePlayer == 0){
                    turnDisplay.textContent = playerArray[0].getName() + "'s Turn.";
                } else {
                    turnDisplay.textContent = playerArray[1].getName() + "'s Turn.";
                }
            }
            }
    
            row.appendChild(gameCell);
            cellNumber++;
        }
        gameBoard.appendChild(row);
        gameState = ["","","","","","","","",""];
        winnerDisplay.textContent = "";
        activePlayer = 0;
        updateActivePlayer();
    }
    
}

var gameState = [   "", "", "",
                    "", "", "",
                    "", "", ""];

function evaluateGame (gameStateArray) {
    function evaluateRows(){
        if (gameState[0] == gameState[1] && gameState [0] == gameState[2] && gameState[0] != "" && gameState[1] != ""){
            console.log("row 1 match")
            winMessage();
        }
        if (gameState[3] == gameState[4] && gameState [3] == gameState[5] && gameState[3] != "" && gameState[4] != ""){
            console.log("row 2 match")
            winMessage();
        }
        if (gameState[6] == gameState[7] && gameState [6] == gameState[8] && gameState[6] != "" && gameState[7] != ""){
            console.log("row 3 match")
            winMessage();
        }
    }

//SCORING BORKEN AND NEEDS SOME LOGIC WORK


    function evaluateColumns (){
        if (gameState[0] == gameState[3] && gameState [0] == gameState[6] && gameState[0] != "" && gameState[3] != ""){
            console.log("column 1 match")
            winMessage();
        }
        if (gameState[1] == gameState[4] && gameState [1] == gameState[7] && gameState[1] != "" && gameState[4] != ""){
            console.log("column 2 match")
            winMessage();
        }
        if (gameState[2] == gameState[5] && gameState [2] == gameState[8] && gameState[2] != "" && gameState[5] != ""){
            console.log("column 3 match")
            winMessage();
        }
    }

    function evaluateDiagonals (){
        if (gameState[0] == gameState[4] && gameState [0] == gameState[8] && gameState[0] != "" && gameState[4] != ""){
            console.log("Diagonal 1 match")
            winMessage();
        }
        if (gameState[2] == gameState[4] && gameState [2] == gameState[6] && gameState[2] != "" && gameState[4] != ""){
            console.log("Diagonal 2 match")
            winMessage();
        }
    }

    function evaluateEndGame(){
        if (gameState.includes("") == false){
            alert("End of game");
        }
    }

    function winMessage () {
       if (activePlayer == 1){
            winnerDisplay.textContent = playerArray[1].getName() + " Wins!";
            playerArray[1].increaseScore();
            RefreshPlayerStats();
       } else {
        winnerDisplay.textContent = playerArray[0].getName() + " Wins!";
        playerArray[0].increaseScore();
        RefreshPlayerStats();
       }
       gameState = 1;
    }

    evaluateRows();
    evaluateColumns();
    evaluateDiagonals();
    evaluateEndGame();
    console.log("Evaluation Complete");
}

//Main Code
let playerArray = [];
//Test Section Only (Comment out when not needed)
//playerArray.push(createPlayer("Matt"));
//let player1 = playerArray[0];
//console.log("Test Player 1 "+player1.getName() +" Initialised");
//------------------------------------------------
RefreshPlayerStats();
ResetBoard();

function createPlayer (name){
    const playerName = name;
    let score = 0;
    
    const getName = function(){
        return (playerName)
    }
    const getScore = function(){
        return score;
    }
    const increaseScore = function(){
        score++;
    }
    
    return {name, getName, getScore, increaseScore}
    }
    
    const playerDialog = document.querySelector("#playerDialog");
    const form = document.getElementById("newPlayerForm");
    //Dialog Launchers
    function launchPlayerDialog(){ 
        playerDialog.showModal();
    }
    
    
    playerDialog.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("playerformsubmitted")
    
    
        if(playerArray[0] == null){
            let playername = document.getElementById("diagname").value;
            playerArray.push(createPlayer(playername));
            console.log(playerArray[0].getName() + " Added to the player list");
            RefreshPlayerStats();
        } else if (playerArray[1] == null) {
            let playername = document.getElementById("diagname").value;
            playerArray.push(createPlayer(playername));
            console.log(playerArray[1].getName() + " Added to the player list");
            RefreshPlayerStats();
        } else {
            alert("Too many players, reset the game.");
        }
    form.reset();
    playerDialog.close();
    })
    