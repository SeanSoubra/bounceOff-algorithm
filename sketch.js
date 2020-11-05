var fixedRect, movingRect;
var rect1, rect2
var topEdge

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(600, 400, 100, 100);
  rect1.shapeColor = "red"
  rect1.debug = true;
  rect1.velocityX = -5;
  rect2= createSprite(300, 400, 100, 100);
  rect2.shapeColor = "red"
  rect2.debug = true;
  rect2.velocityX = 5;
  topEdge = createSprite(600, 0, 1200, 1);

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect, fixedRect);
  bounceOff(rect1, rect2);
  bounceOff(topEdge, fixedRect);
  drawSprites();
}

