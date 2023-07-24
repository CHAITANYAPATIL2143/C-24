const Engine = Matter.Engine
const World = Matter.World
const Body = Matter.Body
const Bodies = Matter.Bodies

var world,engine


//Create namespace for Engine
  
//Create namespace for World
//Create namespace for Bodies
//Create namespace for Body


function setup() {
  createCanvas(400,400);
//create the engine
  engine=Engine.create()
  world=engine.world
  //Add world to the engine
    
  

  
   var ball_options = {

    restitution: 0.93,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
     
   };
  
  
//create a ground
  ground = Bodies.rectangle(200,380,500,10,ground_options);
  World.add(world,ground);
//add to world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
    rect(ground.position.x,ground.position.y,500,10)


  
  
}

