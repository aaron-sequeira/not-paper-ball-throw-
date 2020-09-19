
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,box1,
    box2,box3,paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   
   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//dustbin has been created 
	box1 = createSprite(700,430,20,100);
    box2 = createSprite(600,480,200,20);
	box3 = createSprite(500,430,20,100);
	
	//var options for paperball
	var paper_options = {
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
		}
		
		//paperball has been created and has been added to world
		paperObject =  Matter.Bodies.circle(100,200,20,paper_options);
		World.add(world,paperObject);

  	ground = Matter.Bodies.rectangle(400,500,800,20,{isStatic:true});
    World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 
  background(0);

 Engine.update(engine);
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,800,30);

 ellipseMode(CENTER)
 ellipse(paperObject.position.x,paperObject.position.y,30,30);

 keypressed();

 drawSprites();
 
}

function keypressed(){
 if(keyCode === UP_ARROW){


Matter.Body.applyForce(paperObject.body,paperObject.
	                  body.position,{x:85,y:-85}); 

 }
} 

