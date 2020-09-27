//creating variables for the container
var cont1 , cont2 , cont3;
//creating ground
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	cont1 = createSprite(width/1.15 , 650 , 200 , 20);
    cont1.shapeColor = color("yellow");

    cont2= createSprite(width/1.01, 610 , 20 , 100);
    cont2.shapeColor = color("yellow");

    cont3= createSprite(width/1.32 , 605 , 20 , 100);
    cont3.shapeColor = color("yellow");

    ground = createSprite(width/2 , 670 , 900 , 5);
    ground.shapeColor = color("pink");



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



