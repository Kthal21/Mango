
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var g1,t1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
g1= new Ground (400,600,800,15);
t1= new Tree (600,550,50,100);
s1= new Stone (500,400,5);
	Engine.run(engine);


	
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  g1.display();
  t1.display();
  s1.display();

  drawSprites();
 
}



