var ground;
var dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);
	ground=createSprite(400,300,800,10);
	dustbin1 =createSprite(600,220,10,150);
	dustbin2 =createSprite(700,220,10,150);
	ball=createSprite(400,280,20,20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if (keyDown("space")){
	  ball.y=+1
	  ball.x=650
	  ball.y=260
  }
  
  drawSprites();
}
 


