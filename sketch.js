var fixedRect, movingRect;
var rect3,rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect3=createSprite(100,100,50,50);
  rect3.shapeColor="green";
  rect4=createSprite(200,100,50,50);
  rect4.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  collisionMaster(movingRect,rect3);
  drawSprites();
}

function collisionMaster(p1,p2){
  if (p1.x - p2.x < p2.width/2 + p1.width/2
    && p2.x - p1.x < p2.width/2 + p1.width/2
    && p1.y - p2.y < p2.height/2 + p1.height/2
    && p2.y - p1.y < p2.height/2 + p1.height/2) {
  p1.shapeColor = "red";
  p2.shapeColor = "red";
}
else {
  p1.shapeColor = "green";
  p2.shapeColor = "green";
}

}