const body = document.querySelector("body")
const container = document.querySelector(".container");
const resetBtn = document.querySelector(".resetBtn")
const randomBtn = document.querySelector(".randomBtn")


resetBtn.addEventListener("click", () => {
    resetBoard();
});

randomBtn.addEventListener("click", () => {
    randomColor();
})

function createBoard(rowSize) {
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


function changeColor(e) {
    e.target.style.backgroundColor = "pink";
};


function resetBoard() {
    let rowSize = prompt("How many squares per side? (Maximum: 100)");
    rowSize = parseInt(rowSize);

    if(isNaN(rowSize)) {
        window.alert("Please enter a positive number between 1 and 100.");
        return;
    } else if (rowSize > 100) {
        window.alert("Please enter a positive number between 1 and 100.");
        return;
    } else if (rowSize <= 0) {
        window.alert("Please enter a positive number between 1 and 100.");
        return;
    }

    while (container.firstChild) container.removeChild(container.firstChild); 
    createBoard(rowSize);
}

createBoard(16);