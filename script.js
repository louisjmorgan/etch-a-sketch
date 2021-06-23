const container = document.querySelector('#container');

function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'cell';
    }
}

function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let gridSize = prompt('Choose a grid size');
    if (!gridSize || !Number.isInteger(gridSize) || (gridSize > 100)) gridSize = prompt('Choose an integer value smaller than 100');
    createGrid(gridSize, gridSize);
    setupListeners();
}

function setupListeners() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseover', (e) => {
    e.target.classList.add('filled');
    }));
}


createGrid(16, 16);

const button = document.querySelector('button');
button.addEventListener('click', resetGrid);




