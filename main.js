
function startGame() {
    
    (var i = 1; i <= 9; i++) {
        clearBox(i);
    }
    
    document.turn = "MUELLER";
    document.winner = null;
    setMessage(document.turn + " gets to start");

}

function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}
//anytime a square is clicked, it triggers nextMove function to swap "turns"
function nextMove(square) {
    if (document.winner != null) {
        setMessage(document.turn + " already won")
    } else if (square.innerText =='') {
        square.innerText = document.turn;
        switchTurn();
    } else {
        setMessage("TAKEN!")
    } 
}
//change turns 
function switchTurn () {
    if (checkForWinner(document.turn)) {
        setMessage("congrats " + document.turn + ", you won!")
        document.winner = document.turn;
    } else if (document.turn == "MUELLER") {
        document.turn = "TRUMP";
        setMessage("It's " + document.turn + "'s turn");
    } else {
        document.turn = "MUELLER";
        setMessage("It's " + document.turn + "'s turn")
    }
}
function checkForWinner(move) {
    var result = false;
    if(checkRow(1,2,3, move) ||
        checkRow(4,5,6, move) ||
        checkRow(7,8,9, move) ||
        checkRow(1,4,7, move) ||
        checkRow(2,5,3, move) ||
        checkRow(3,6,9, move) ||
        checkRow(1,5,9, move) ||
        checkRow(3,5,7, move))  {
            result = true;
    }   
    return result;
}

function checkRow(a,b,c, move) {
    var result = false;
    if(getBox(a) == move && getBox(b)== move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function getBox(number) {
    return document.getElementById("s" + number).innerText;
}
function clearBox (number) {
    document.getElementById("s" + number).innerText = "";
}