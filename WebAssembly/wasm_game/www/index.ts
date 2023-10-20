import init, { World } from "wasm_game";

init().then(() => {
  const CELL_SIZE = 20;
  const world = World.new(16);
  const worldWidth = world.width();
  const fps = 5;

  const canvas = <HTMLCanvasElement>document.getElementById("snake-world");
  const context = canvas.getContext("2d");

  canvas.width = worldWidth * CELL_SIZE;
  canvas.height = worldWidth * CELL_SIZE;

  function drawWorld() {
    context.beginPath();
    for (let x = 0; x < worldWidth + 1; x++) {
      context.moveTo(x * CELL_SIZE, 0);
      context.lineTo(x * CELL_SIZE, worldWidth * CELL_SIZE);
    }

    for (let y = 0; y < worldWidth + 1; y++) {
      context.moveTo(0, y * CELL_SIZE);
      context.lineTo(worldWidth * CELL_SIZE, y * CELL_SIZE);
    }
    context.stroke();
  }

  function drawSnake() {
    const snake_index = world.snake_head_index();
    const row = Math.floor(snake_index / worldWidth);
    const col = snake_index % worldWidth;

    context.beginPath();
    context.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    context.stroke();
  }

  function draw() {
    drawWorld();
    drawSnake();
  }

  function run() {
    setTimeout(() => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      world.update();
      draw();
      requestAnimationFrame(run);
    }, 1000 / fps);
  }

  draw();
  run();
});
