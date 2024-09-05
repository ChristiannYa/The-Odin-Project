const gridContainer = document.getElementById('grid-container');

const gridSize = 16;
const totalCells = gridSize * gridSize;

for (let i = 0; i < totalCells; i++) {
    const gridCell = document.createElement('div');

    gridCell.classList.add('grid-item');

    gridContainer.appendChild(gridCell);
}

let hoveredCells = [];

gridContainer.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('grid-item')) {

        event.target.classList.add('hovered');

        hoveredCells.push(event.target);
    }
});