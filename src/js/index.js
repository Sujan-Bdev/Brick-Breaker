import Paddle from "./paddle";
import InputHandler from "./input";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

// CONSTANTS
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(paddle);

let lastTime = 0;

const gameLoop = (timeStamp) => {
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  ctx.clearRect(0, 0, 800, 600);
  paddle.update(deltaTime);
  paddle.draw(ctx);

  requestAnimationFrame(gameLoop);
};

gameLoop();
