var fixedRect, movingRect;
var obj1,obj2;
var object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 = createSprite(200,100,50,50);
  obj1.shapeColor = "green";
  obj2 = createSprite(300,100,50,50);
  obj2.shapeColor = "green";
}

//sprite.isTouching(target);
//ball.isTouching(wall); ball - moving, wall - fixed
//obstaclesGroup.isTouching(trex); obstaclesGroup - moving , trex - fixed
//arguments  - values/parameter/variables
//add(var num1,var num2)
function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,obj2)){
    movingRect.shapeColor = "red";
    obj2.shapeColor = "red";
  }
  else if(isTouching(movingRect,obj1))
  {
    movingRect.shapeColor = "blue";
    obj1.shapeColor = "blue";
  }
  else if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";

  }
  else
  {
    movingRect.shapeColor = "green";
    obj2.shapeColor = "green";
    obj1.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
      drawSprites();
}

//var - boolean variable - true(works), false(not working)
//object1 as moving rect, object2 as fixed rect


