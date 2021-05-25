const body = document.querySelector("body")
const container = document.querySelector(".container");
const resetBtn = document.querySelector(".resetBtn")

resetBtn.addEventListener("click", () => {
    resetBoard();
});

function createBoard() {

    for(let i = 0; i <= 255; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", changeColor);
        container.appendChild(square);
    };
};

function changeColor(e) {
    e.target.style.backgroundColor = "pink";
};

function resetBoard() {
    const square = document.getElementsByClassName("square");
    for( let i = 0; i<square.length; i++) {
        square[i].style.backgroundColor = "rgba(201, 201, 201, 0.692)"
    }
};

createBoard();