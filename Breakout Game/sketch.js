var ball,bricks;
var edgeT,edgeR, edgeB,edgeL;

function setup() {
  createCanvas(450, 400);

  //ball sprite
  ball = createSprite(150, 250, 15, 15);
  ball.shapeColor = "orange";

  //Top edge
  edgeT = createSprite(225, 0, 450, 5);
  edgeT.shapeColor = "gray";

  //Left edge
  edgeL = createSprite(0, 200, 5, 400);
  edgeL.shapeColor = "gray";

  //Right edge
  edgeR = createSprite(450, 200, 5, 400);
  edgeR.shapeColor = "gray";

  //Bottom edge
  edgeB = createSprite(225, 400, 450, 5);
  edgeB.shapeColor = "gray";

}

function draw() {
  background("honeydew");

  if (mouseIsPressed) {
    ball.velocityX = 4; 
    ball.velocityY = 4; 
  }

  //draw bricks uisng loop
  for (var x = 50; x < 400; x = x + 55) {
    var brick = createSprite(x, 75, 50, 20);
    brick.shapeColor = "brown";
  }

  //make the ball bounce off the edges
  ball.bounceOff(edgeL);
  ball.bounceOff(edgeR);
  ball.bounceOff(edgeT);
  ball.bounceOff(edgeB);

  drawSprites();
}


