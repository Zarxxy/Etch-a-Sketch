const body = document.querySelector("body")
const container = document.querySelector(".container");
const resetBtn = document.querySelector(".resetBtn")
const randomBtn = document.querySelector(".randomBtn")

//Event listeners for the Buttons
resetBtn.addEventListener("click", () => {
    resetBoard();
});

randomBtn.addEventListener("click", () => {
    randomColor();
})

//Creates a new board 
function createBoard(rowSize) {
    rowSize = rowSize || 16;
    let boardSize = rowSize * rowSize;
    let squareHight = (400 / rowSize) + "px";
    let squareWidth = (400 / rowSize) + "px";

    for(let i = 0; i < boardSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", changeColor);
        square.style.height = squareHight;
        square.style.width = squareWidth;
        container.appendChild(square);
    }
}

//Changes the color of the squares inside the board
function changeColor(e) {
    e.target.style.backgroundColor = "pink";
}

//Changes the squares inside the board to a semi random color
function changeToRandomColor(e) {
    let r = Math.random()*256|0;
    let b = Math.random()*256|0;
    let g = Math.random()*256|0;
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

//Switches the single color event listener, on the squares, to the random color one
function randomColor() {
    const square = container.querySelectorAll(".square")
    for (let i = 0; i < square.length; i++){
        square[i].removeEventListener("mouseover", changeColor);
        square[i].addEventListener("mouseover", changeToRandomColor);
    }
}

//Resets the current board, ask the user how many squares per side and creates a new board with this input
function resetBoard() {
    let rowSize = prompt("How many squares per side? (Maximum: 100)");
    if(rowSize == "") {
        rowSize = 16
    } else {
        rowSize = parseInt(rowSize);
        if(isNaN(rowSize)) {
            window.alert("Please enter a positive number between 1 and 100.");
            return;
        }else if (rowSize > 100) {
            window.alert("Please enter a positive number between 1 and 100.");
            return;
        }else if (rowSize <= 0) {
            window.alert("Please enter a positive number between 1 and 100.");
            return;
        }
    }
    while (container.firstChild) container.removeChild(container.firstChild); 
    createBoard(rowSize);
}

//Creates the first board
createBoard(16);