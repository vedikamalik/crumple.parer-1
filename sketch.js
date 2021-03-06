
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box1,box2, box3;
var ball;

function setup() {
createCanvas(1000,1000);
engine = Engine.create();
world = engine.world;

  ground = new Ground(800,650,2000,10);
  box1 = new Box(700,635,140,15);
  box2 = new Box(630,590,15,80);
  box3 = new Box(770,590,15,80);
  ball = new Ball(300,610,40);
}


function draw() {
 
  Engine.run(engine);
  background("black");
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();
 
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
  Matter.Body.applyForce(ball.body, ball.body.position,{x:95,y:-85})
}
}