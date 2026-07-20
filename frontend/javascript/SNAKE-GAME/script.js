const board = document.querySelector('.board');
const modal = document.querySelector(".modal");
const startButton = document.querySelector('.btn-start');
const reStartButton = document.querySelector('.btn-restart');
const startGameModal = document.querySelector('.start-game');
const gameOverModal = document.querySelector('.game-over');

const highScoreElement = document.querySelector("#high-score");
const scoreElement = document.querySelector("#score");
const timeElement = document.querySelector("#time");


const blockHeight = 40;
const blockWidth = 40;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

let highScore = localStorage.getItem("highScore") || 0;
let score = 0;
let time = "00-00";

highScoreElement.innerText = highScore;

let direction = 'down';
let intervalId = null;
let timeIntervalId = null;

const blocks = [];
let snake = [{
    x: 1, y: 3
}];
let food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) }

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const block = document.createElement('div');
        block.classList.add("block");
        board.appendChild(block);
        // block.innerText = `${row}-${col}`
        blocks[`${row}-${col}`] = block;
    }
}

function render() {
    let head = null;

    blocks[`${food.x}-${food.y}`].classList.add("food");

    // Directions
    if (direction === "left") {
        head = { x: snake[0].x, y: snake[0].y - 1 }
    } else if (direction === "right") {
        head = { x: snake[0].x, y: snake[0].y + 1 }
    } else if (direction === "down") {
        head = { x: snake[0].x + 1, y: snake[0].y }
    } else if (direction === "up") {
        head = { x: snake[0].x - 1, y: snake[0].y }
    }

    // Wall collision logic
    if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
        // alert("Game Over.");
        clearInterval(intervalId);
        modal.style.display = "flex";
        startGameModal.style.display = "none";
        gameOverModal.style.display = "flex";
        return;
    }

    // Food consume logic and score
    if (head.x == food.x && head.y == food.y) {
        blocks[`${food.x}-${food.y}`].classList.remove("food");
        food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) }
        blocks[`${food.x}-${food.y}`].classList.add("food");
        snake.unshift(head);

        score += 10;
        scoreElement.innerText = score;

        if (score > highScore) {
            highScore = score;
            localStorage.setItem("highScore", highScore.toString());
        }
    }

    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
    })

    snake.unshift(head);
    snake.pop();


    snake.forEach(segment => {
        // console.log(segment);
        // console.log(blocks[`${segment.x}-${segment.y}`]);
        blocks[`${segment.x}-${segment.y}`].classList.add("fill");
    });
}

// Start Button
startButton.addEventListener("click", () => {
    modal.style.display = "none";
    intervalId = setInterval(() => { render() }, 300);
    timeIntervalId = setInterval(() => {
        let [min, sec] = time.split("-").map(Number);

        sec += 1;
        if (sec >= 60) {
            sec = 0;
            min += 1;
        }

        time = `${min.toString().padStart(2, '0')}-${sec.toString().padStart(2, '0')}`;
        timeElement.innerText = time;
    }, 1000);
});

// Re-start game
reStartButton.addEventListener("click", restartGame);

function restartGame() {

    blocks[`${food.x}-${food.y}`].classList.remove("food");
    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.remove("fill")
    });

    modal.style.display = "none";
    direction = "right";
    snake = [{ x: 1, y: 3 }];
    food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) };
    intervalId = setInterval(() => { render() }, 300);

    score = 0;
    scoreElement.innerText = score;

    time = `00-00`;
    timeElement.innerText = time;

    highScoreElement.innerText = highScore;
}

addEventListener("keydown", (event) => {
    // console.log("DETAILS", event)
    if (event.key === "ArrowLeft") {
        direction = "left";
    } else if (event.key === "ArrowRight") {
        direction = "right";
    } else if (event.key === "ArrowUp") {
        direction = "up";
    } else if (event.key === "ArrowDown") {
        direction = "down";
    }
});