document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent!');
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent!');
});

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameOfLifeCanvas');
    const ctx = canvas.getContext('2d');

    const cellSize = 5;
    const rows = Math.floor(canvas.height / cellSize);
    const cols = Math.floor(canvas.width / cellSize);

    let grid = createGrid();
    let nextGrid = createGrid();

    function createGrid() {
        let arr = [];
        for (let i = 0; i < rows; i++) {
            arr[i] = [];
            for (let j = 0; j < cols; j++) {
                arr[i][j] = Math.random() > 0.7 ? 1 : 0;
            }
        }
        return arr;
    }

    function drawGrid() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                ctx.fillStyle = grid[i][j] ? '#fff' : '#000';
                ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
            }
        }
    }

    function updateGrid() {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                let aliveNeighbors = countAliveNeighbors(i, j);
                if (grid[i][j] === 1) {
                    nextGrid[i][j] = aliveNeighbors === 2 || aliveNeighbors === 3 ? 1 : 0;
                } else {
                    nextGrid[i][j] = aliveNeighbors === 3 ? 1 : 0;
                }
            }
        }
        [grid, nextGrid] = [nextGrid, grid];
    }

    function countAliveNeighbors(x, y) {
        let count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue;
                const ni = x + i;
                const nj = y + j;
                if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
                    count += grid[ni][nj];
                }
            }
        }
        return count;
    }

    function gameLoop() {
        drawGrid();
        updateGrid();
    }

    // 200ミリ秒ごとにgameLoop関数を呼び出します
    setInterval(gameLoop, 300);
});
