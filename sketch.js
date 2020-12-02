	var ground;
	var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);
	ground=createSprite(400,300,800,20);
	ball=createSprite(400,200,20,20);
    ball.velocityY=2;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if (ball.isTouching(ground)){
	  ball.Matter.body.isStatic=true;
  }
  drawSprites();
 
}



