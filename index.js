const robot = require("robotjs");

robot.setMouseDelay(2);

setInterval(() => {
let mousePos = robot.getMousePos()
  let x = mousePos.x + 10
  let y = mousePos.y + 10
  robot.moveMouse(x , y);
  console.log("mouse se mexeu")
}, 1000 * 10);
