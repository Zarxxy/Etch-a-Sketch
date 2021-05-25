const container = document.querySelector(".container");


function createBoard() {
  
    for(let i = 0; i <= 255; i++) {
        const square = document.createElement("div");
        square.classList.add("square")
        square.addEventListener("mouseover", changeColor)
        container.appendChild(square);
    }
}

function changeColor(e) {
    console.log("cock")
    e.target.style.backgroundColor = "pink";
};

createBoard();