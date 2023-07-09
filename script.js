const grid = document.querySelector(".grid");
const gridSizeInput = document.querySelector("input");
const gridSizeInputDisplay = document.querySelector(".size");
const applySizeButton = document.querySelector(".apply");
const resetColorButton = document.querySelector(".reset-color");

let gridSize = document.querySelector("input").valueAsNumber;

function createGrid(gridSize) {
    
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
    
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
    
            gridSquare.style.width = `${grid.clientWidth / gridSize}px`;
            gridSquare.style.height = `${grid.clientWidth / gridSize}px`;
    
            gridSquare.addEventListener("mouseover", () => {
                gridSquare.style.backgroundColor = getRandomColor();  
            });
            
            grid.appendChild(gridSquare);
        }
    }
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

createGrid(gridSize);

function resetColor() {
    const gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
}

function resetGrid() {
    // remove old grid
    const gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach((square) => {
        square.remove();
    });
}

resetColorButton.addEventListener("click", () => {
    resetColor();
});

applySizeButton.addEventListener("click", () => {
    resetGrid();
    gridSize = document.querySelector("input").valueAsNumber;
    createGrid(gridSize);
});

gridSizeInput.addEventListener("input", () => {
    gridSizeInputDisplay.textContent = `${gridSizeInput.value}x${gridSizeInput.value}`;
});


