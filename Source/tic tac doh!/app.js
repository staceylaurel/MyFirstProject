let cells = document.querySelectorAll('.row > div');

for (let i =0; i < cells.length; i++){
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked(){
    event.target.textContent = 'X'
}

//if else statements
cells[2].textContent

// === is left handside ===to right handside

// logical or operator if(conditionOne && conditionTwo){}
// logical or operator if(conditionOne || conditionTwo && conditionOne)

// if (condition) {
//    else if () {
//    } else if () {
//    } else if () {    
//    }
//}