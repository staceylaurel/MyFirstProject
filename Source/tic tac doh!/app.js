//if else statements
//cells[2].textContent

// === is left handside ===to right handside

// logical or operator if(conditionOne && conditionTwo){}
// logical or operator if(conditionOne || conditionTwo && conditionOne)

// if (condition) {
//    else if () {
//    } else if () {
//    } else if () {    
//    }
//}

//end game practice
const winningMessage = document.querySelector('.winning-message')
   
const resetButton = document.querySelector('#restart-button')
    resetButton.addEventListener('click', function () {
        window.location.reload ()
    })

const winningMessageText = document.querySelector('#winning-message-text') 
    console.log(winningMessageText)
//board

let cells = document.querySelectorAll('.row > div');

for (let i = 0; i < cells.length; i++) {
    let cell = cells[i];
    cells[i].addEventListener('click', cellClicked);
}

let currentPlayer = 'X';

let clickedsquare = 0

let isGameOver = false 

function cellClicked(e) {
  
    if (isGameOver === true) {
        return;
    }

    clickedsquare++

    if (e.target.textContent === 'X' || e.target.textContent === 'O') {
        return;
    }
    //draw current player
    e.target.textContent = currentPlayer;

    checkWinner();

    togglePlayer();

    function togglePlayer() {

        if (currentPlayer === 'X') {
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }
    }
}

//If X wins

function checkWinner() {
    if (cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent === 'X') {
        console.log('Player X you won!');
        isGameOver = true;
        winningMessage.style.display = 'flex';
        winningMessageText.textContent = "Player X you won!";
    } else if (cells[3].textContent === 'X' && cells[4].textContent === 'X' && cells[5].textContent === 'X') {
        console.log('Player X you won!');
        isGameOver = true;
        winningMessage.style.display = 'flex';
        winningMessageText.textContent = "Player X you won!";
    } else if (cells[6].textContent === 'X' && cells[7].textContent === 'X' && cells[8].textContent === 'X') {
        console.log('Player X you won!');
        isGameOver = true;
        winningMessage.style.display = 'flex';
        winningMessageText.textContent = "Player X you won!";
    } else if (cells[0].textContent === 'X' && cells[3].textContent === 'X' && cells[6].textContent === 'X') {
        console.log('Player X you won!');
        isGameOver = true;
        winningMessage.style.display = 'flex';
        winningMessageText.textContent = "Player X you won!";
    } else if (cells[1].textContent === 'X' && cells[4].textContent === 'X' && cells[7].textContent === 'X') {
        console.log('Player X you won!');
        isGameOver = true;
        winningMessage.style.display = 'flex';
        winningMessageText.textContent = "Player X you won!";
    } else if (cells[2].textContent === 'X' && cells[5].textContent === 'X' && cells[8].textContent === 'X') {
        console.log('Player X you won!');
        isGameOver = true;
        winningMessage.style.display = 'flex';
        winningMessageText.textContent = "Player X you won!";
    } else if (cells[0].textContent === 'X' && cells[4].textContent === 'X' && cells[8].textContent === 'X') {
        console.log('Player X you won!');
        isGameOver = true;
        winningMessage.style.display = 'flex';
        winningMessageText.textContent = "Player X you won!";
    } else if (cells[2].textContent === 'X' && cells[4].textContent === 'X' && cells[6].textContent === 'X') {
        console.log('Player X you won!');
        isGameOver = true;
        winningMessage.style.display = 'flex';
        winningMessageText.textContent = "Player X you won!";
    }

    //If O wins

    if (cells[0].textContent === 'O' && cells[1].textContent === 'O' && cells[2].textContent === 'O') {
        console.log('Player O you won!')
        isGameOver = true
        winningMessage.style.display = 'flex';
        winningMessageText.textContent = "Player O you won!";
    } else if (cells[3].textContent === 'O' && cells[4].textContent === 'O' && cells[5].textContent === 'O') {
        console.log('Player O you won!')
        isGameOver = true
        winningMessage.style.display = 'flex';
        winningMessageText.textContent = "Player O you won!";
    } else if (cells[6].textContent === 'O' && cells[7].textContent === 'O' && cells[8].textContent === 'O') {
        console.log('Player O you won!')
        isGameOver = true
        winningMessage.style.display = 'flex';
        winningMessageText.textContent = "Player O you won!";
    } else if (cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent === 'O') {
        console.log('Player O you won!')
        isGameOver = true
        winningMessage.style.display = 'flex';
        winningMessageText.textContent = "Player O you won!";
    } else if (cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent === 'O') {
        console.log('Player O you won!')
        isGameOver = true
        winningMessage.style.display = 'flex';
        winningMessageText.textContent = "Player O you won!";
    } else if (cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O') {
        console.log('Player O you won!')
        isGameOver = true
        winningMessage.style.display = 'flex';
        winningMessageText.textContent = "Player O you won!";
    } else if (cells[0].textContent === 'O' && cells[4].textContent === 'O' && cells[8].textContent === 'O') {
        console.log('Player O you won!')
        isGameOver = true
        winningMessage.style.display = 'flex';
        winningMessageText.textContent = "Player O you won!";
    } else if (cells[2].textContent === 'O' && cells[4].textContent === 'O' && cells[6].textContent === 'O') {
        console.log('Player O you won!')
        isGameOver = true
        winningMessage.style.display = 'flex';
        winningMessageText.textContent = "Player O you won!";
    } else if (clickedsquare === 9) {
        console.log('Player O you won!')
        isGameOver = true
        winningMessage.style.display = 'flex';
        winningMessageText.textContent = "Player O you won!";
    }

}