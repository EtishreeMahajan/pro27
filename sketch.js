
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;
var body;
var bob1,bob2,bob3,bob4,bob5,bob1Diameter,bob2Diameter,bob3Diameter,bob4Diameter,bob5Diameter;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new Bob(300,450,25);
   	bob2 = new Bob(350,450,25);
  	bob3 = new Bob(400,450,25);
  	bob4 = new Bob(450,450,25);
    bob5 = new Bob(500,450,25);
    
    roof = new Roof(400,200,500,20);

    rope1 = new Rope(bob1.body,roof.body,-bob1Diameter*2,0);
    rope2 = new Rope(bob2.body,roof.body,-bob2Diameter*2,0);
    rope3 = new Rope(bob3.body,roof.body,-bob3Diameter*2,0);
    rope4 = new Rope(bob4.body,roof.body,-bob4Diameter*2,0);
    rope5 = new Rope(bob5.body,roof.body,-bob5Diameter*2,0);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(255);

  roof.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display(); 
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



