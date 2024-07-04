
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
    player1Label.textContent = playerArray[0].getName() + " (Player1)";
    player1Container.appendChild(player1Label);
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
    player2Label.textContent = playerArray[1].getName() + " (Player2)";
    console.log(player2Label);
    player2Container.appendChild(player2Label);
    console.log(player2Container);
}
}

const resetButton = document.querySelector(".resetBoardButton");
resetButton.addEventListener("click", () => {
    let gameBoard = document.querySelector(".gameBoard");
    gameBoard.replaceChildren();
    let cellNumber = 1
    for (let r=0; r<3; r++){
    let row = document.createElement("div");
    row.classList.add("boardRow")
    for (let i = 1; i<4; i++){
        let gameCell = document.createElement("div");
        gameCell.id = "gameCell" + cellNumber;
        gameCell.classList.add("boardCell")
        row.appendChild(gameCell);
        cellNumber++;
    }
    gameBoard.appendChild(row);
}
})

var gameState = [   "", "", "",
                    "", "", "",
                    "", "", ""];

function evaluateGame (gameStateArray) {
    function evaluateRows(){
        if (gameState[0] == gameState[1] && gameState [0] && gameState[2] && gameState[0] != ""){
            console.log("row 1 match")
            // ADD WIN FUCNTION
        }
        if (gameState[3] == gameState[4] && gameState [3] && gameState[5] && gameState[3] != ""){
            console.log("row 2 match")
            // ADD WIN FUCNTION
        }
        if (gameState[6] == gameState[7] && gameState [6] && gameState[8] && gameState[6] != ""){
            console.log("row 3 match")
            // ADD WIN FUCNTION
        }
    }

    function evaluateColumns (){
        if (gameState[0] == gameState[3] && gameState [0] && gameState[6] && gameState[0] != ""){
            console.log("column 1 match")
            // ADD WIN FUCNTION
        }
        if (gameState[1] == gameState[4] && gameState [1] && gameState[7] && gameState[1] != ""){
            console.log("column 2 match")
            // ADD WIN FUCNTION
        }
        if (gameState[2] == gameState[5] && gameState [2] && gameState[8] && gameState[2] != ""){
            console.log("column 3 match")
            // ADD WIN FUCNTION
        }
    }

    function evaluateDiagonals (){
        if (gameState[0] == gameState[4] && gameState [0] && gameState[8] && gameState[0] != ""){
            console.log("Diagonal 1 match")
            // ADD WIN FUCNTION
        }
        if (gameState[2] == gameState[4] && gameState [2] && gameState[6] && gameState[2] != ""){
            console.log("Diagonal 2 match")
            // ADD WIN FUCNTION
        }
    }

    function evaluateEndGame(){
        if (gameState.includes("") == false){
            alert("End of game");
        }
    };

    evaluateRows();
    evaluateColumns();
    evaluateDiagonals();
    evaluateEndGame();
    console.log("Evaluation Complete");
}






//-------------------------------------
// Test Section Only (Comment out when not needed)
let playerArray = [];
playerArray.push(createPlayer("Matt"));
let player1 = playerArray[0];
console.log("Test Player 1 "+player1.getName() +" Initialised");
RefreshPlayerStats();

gameState[0] = "X";
gameState[1] = "X";
gameState[2] = "X";
gameState[3] = "X";
gameState[4] = "X";
gameState[5] = "X";
gameState[6] = "X";
gameState[7] = "X";
gameState[8] = "X";


//-------------------------------------

// Solution
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
    