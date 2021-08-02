var runner,runner_running;
var path,pathImg;
var bomb,bombImg;


function preload(){
  
  runner_running = loadAnimation("Runner-1.png","Runner-2.png") ;
  pathImg = loadImage("path.png");
  bombImg = loadImage("bomb.png");
}

function setup(){

  createCanvas(400,400);
  
  path = createSprite(200,200)
  path.addImage("running",pathImg)
  path.velocityY = 4;
  path.scale = 1.2;

  runner = createSprite(200,350);
  runner.addAnimation("running", runner_running);
  edges = createEdgeSprites();
  runner.scale=0.05;

  

  invisibleGroundleft = createSprite(30,200,30,400);
  invisibleGroundleft.visible = false;

  invisibleGroundright = createSprite(380,200,30,400);
  invisibleGroundright.visible = false;
 
  

}

function draw() {

  background(0);
  drawSprites();
  

  if (path.y > 500 ){
     path.y = height/2;
  }    
  
  runner.x = World.mouseX;
  runner.y = World.mouseY;
  
  runner.collide(invisibleGroundleft);
  runner.collide(invisibleGroundright);
  
}
