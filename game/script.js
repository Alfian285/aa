window.onload = function () {
  initializeCanvas();
  document.addEventListener("keydown", keyPush);
  startGameLoop();
  updateTimer();
};

function startGameLoop() {
  GameLoopInterval = setInterval(snakeGame, 1000 / 15);
  setInterval(updateTimer, 1000); // Mengupdate timer setiap detik
}

let gameOver = false;
let GameLoopInterval;
let canvas, context;
let posX = (posY = 10);
let gridSize = 20;
let numTilesX = 48;
let numTilesY = 30;
let appleX = (appleY = 15);
let velX = (velY = 0);
let trail = [];
let tail = 6; // Mengatur panjang awal ular
let hours = 0;
let minutes = 0;
let seconds = 0;
let timerElement = document.getElementById("timer");
let score = 0;
let scoreElement = document.getElementById("score");
let highScoreElement = document.getElementById("highScore");

let highScore = localStorage.getItem("highest-score") || 0;
highScoreElement.innerHTML = highScore;

function handleGameOver() {
  clearInterval(GameLoopInterval);
  alert("Game over! Press Ok to replay..");
  location.reload();
}

function initializeCanvas() {
  canvas = document.getElementById("gameCanvas");
  context = canvas.getContext("2d");
  posX = Math.floor(numTilesX / 2);
  posY = Math.floor(numTilesY / 2);
}

function snakeGame() {
  if (gameOver) {
    return handleGameOver();
  }
  updateSnakePosition();
  checkBoundaries();
  drawGameBoard();
  drawSnake();
  checkSelfCollision();
  updateTrail();
  checkAppleCollision();
  drawApple();
}

function updateSnakePosition() {
  posX += velX;
  posY += velY;
}

function checkBoundaries() {
  if (posX < 0) {
    posX = numTilesX - 1;
  }
  if (posX > numTilesX - 1) {
    posX = 0;
  }
  if (posY < 0) {
    posY = numTilesY - 1;
  }
  if (posY > numTilesY - 1) {
    posY = 0;
  }
  if (posX < 0 || posX >= numTilesX || posY < 0 || posY >= numTilesY) {
    gameOver = true;
    resetGame();
  }
}

function drawGameBoard() {
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
  context.fillStyle = "lime";
  for (let i = 0; i < trail.length; i++) {
    context.fillRect(
      trail[i].x * gridSize,
      trail[i].y * gridSize,
      gridSize - 2,
      gridSize - 2
    );
  }
}

function checkSelfCollision() {
  for (let i = 0; i < trail.length; i++) {
    if (trail[i].x === posX && trail[i].y === posY) {
      return (gameOver = true);
      break;
    }
  }
}

function updateTrail() {
  trail.push({ x: posX, y: posY });
  while (trail.length > tail) {
    trail.shift();
  }
}

function checkAppleCollision() {
  if (appleX === posX && appleY === posY) {
    tail++;
    score++;
    highScore = score >= highScore ? score : highScore;
    localStorage.setItem("highest-score", highScore);
    scoreElement.innerText = highScore;
    placeNewApple();
  }
}

function placeNewApple() {
  appleX = Math.floor(Math.random() * numTilesX);
  appleY = Math.floor(Math.random() * numTilesY);
}

function drawApple() {
  context.fillStyle = "red";
  context.fillRect(
    appleX * gridSize,
    appleY * gridSize,
    gridSize - 2,
    gridSize - 2
  );
}

function updateTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  showTimer();
}

function pad(val) {
  return val < 10 ? "0" + val : val;
}

function showTimer() {
  let formattedTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
  timerElement.innerHTML = formattedTime;
}

function keyPush(evt) {
  if (evt.key === "w" && velY !== 1) {
    velX = 0;
    velY = -1;
  } else if (evt.key === "a" && velX !== 1) {
    velX = -1;
    velY = 0;
  } else if (evt.key === "s" && velY !== -1) {
    velX = 0;
    velY = 1;
  } else if (evt.key === "d" && velX !== -1) {
    velX = 1;
    velY = 0;
  }
}
