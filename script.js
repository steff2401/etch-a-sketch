const gridDiv = document.querySelector(".grid");
let gridSize = document.querySelector("input").valueAsNumber;
const sizeDisplay = document.querySelector(".size");
sizeDisplay.textContent = `${gridSize}x${gridSize}`;

function createGrid(gridSize) {
    
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
    
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
    
            gridSquare.style.width = `${gridDiv.clientWidth / gridSize}px`;
            gridSquare.style.height = `${gridDiv.clientWidth / gridSize}px`;
    
            gridSquare.addEventListener("mouseover", () => {
                gridSquare.style.backgroundColor = "black";
            })
            
            gridDiv.appendChild(gridSquare);
        }
    }
}

createGrid(gridSize);

function resetColor() {
    const gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach((square) => {
        square.style.backgroundColor = "white";
    })
}

function resetGrid() {
    // remove old grid
    const gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach((square) => {
        square.remove();
    })
}

const resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", () => {
    resetColor();
});

const applyButton = document.querySelector(".apply");

applyButton.addEventListener("click", () => {
    resetGrid();
    gridSize = document.querySelector("input").valueAsNumber;
    createGrid(gridSize);
});

gridSizeInput = document.querySelector("input");
gridSizeInput.addEventListener("input", () => {
    sizeDisplay.textContent = `${gridSizeInput.value}x${gridSizeInput.value}`;
})


