
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bob,bob2,bob3,bob4,bob5;
var rope,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
   roof=new Roof(450,50,600,50);

   bob = new Bob (300,500,50);
   bob2 = new Bob (350,500,50);
   bob3 = new Bob (400,500,50);
   bob4 = new Bob (450,500,50);
   bob5 = new Bob (500,500,50);
   rope = new Rope(roof.body,bob.body,-2,0);
   rope2 = new Rope(roof.body,bob2.body,2,0);
   rope3 = new Rope(roof.body,bob3.body,2,0);
   rope4 = new Rope(roof.body,bob4.body,2,0);
   rope5 = new Rope(roof.body,bob5.body,2,0);
}



function draw() {
  rectMode(CENTER);
  background(155);
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  
  drawSprites();
  
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(bob.body, bob.body.position , { x : -50 , y : -50 } ) ;
   
   }
   }


