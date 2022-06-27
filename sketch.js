const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
drop = []
var engine, world;


function preload() {
 
  snow = loadImage("snow2.jpg")
}



function setup() {
  createCanvas(800,400);
 snowfall =  createSprite(400, 200, 50, 50);
snowfall.addImage("s",snow)
  engine = Engine.create();
  world = engine.world;
Engine.update(engine)
for(var i=0;i<100;i++){

  drop.push(new Drop(random(0,400),random(0,400)))
}

}

function draw() {
  background(255,255,255);  
  for(var i= 0;i<drop.length;i++){
    drop[i].display()
    drop[i].resetDrop()

  drawSprites();
  }
}