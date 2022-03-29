let board = document.querySelector(".board")

let input = 0



do {
    squaresPerSide = prompt("Please enter a number between 1 and 99");
} while (squaresPerSide > 100);


board.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
board.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;

function randomHsl() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}

function creation() {
    for (i = 0; i < (squaresPerSide*squaresPerSide); i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "white"
        square.classList.add("square")
        board.insertAdjacentElement("beforeend", square)
    
        square.addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = `${randomHsl()}`
        })
        
        let button = document.querySelector("#resetPad")
        button.addEventListener("click", function(event) {
        square.style.backgroundColor = "white";
        
        })
        
    }
    
}

creation()

