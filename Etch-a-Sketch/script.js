const gridContainer = document.getElementById('grid-container');
const changeGridBtn = document.getElementById('change-grid');

let gridSize = 16;
let hoveredCells = [];

function createGrid(size) {
    gridContainer.innerHTML = ''; // Clear existing grid
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    const totalCells = size * size;

    for (let i = 0; i < totalCells; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-item');
        gridContainer.appendChild(gridCell);
    }
}

function changeGridSize() {
    const newSize = prompt('Enter the number of squares per side (1-64):');
    const parsedSize = parseInt(newSize);

    if (parsedSize && parsedSize >= 1 && parsedSize <= 64) {
        gridSize = parsedSize;
        createGrid(gridSize);
    } else if (newSize !== null) { // Check if user didn't click "Cancel"
        alert('Please enter a valid number between 1 and 64.');
    }
}

gridContainer.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('grid-item')) {
        event.target.classList.add('hovered');
        hoveredCells.push(event.target);
    }
});

changeGridBtn.addEventListener('click', changeGridSize);

// Initial grid creation
createGrid(gridSize);