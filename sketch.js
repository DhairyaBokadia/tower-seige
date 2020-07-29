const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
  

function setup() {

  engine = Engine.create();
    world = engine.world;
    
  createCanvas(800,400);
  
  
  stone1=new Stone(200,100);
  chain1 = new Chain(stone1.body,{x:100,y:150});

  ground1=new Ground(300,200,50,5)
}

function draw() {
  Engine.update(engine);
  background("green");  


  stone1.display();
  chain1.display();
  ground1.display();
  drawSprites();
}


