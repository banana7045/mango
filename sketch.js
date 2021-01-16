
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var boy,tree
var mango1,mango2,mango3
var stone
var chain
function preload()
{
	boy=loadImage("boy.png")
	tree=loadImage("tree.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone=new Stone(235,420)
mango1=new mango(1100,100)
mango2=new mango(1000,200)
mango3=new mango(1150,150)
chain=new Slingshot(stone.body,{x:236,y:410})
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
 image(boy,200,340,200,300) 
 image(tree,850,15,400,600)
 stone.display();
 mango1.display();
 mango2.display();
 mango3.display();
 chain.display();
 detectCollision(stone,mango1)
 detectCollision(stone,mango2)
 detectCollision(stone,mango3)
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})   
   }
function detectCollision(s,m){
a=s.body.position
b=m.body.position

var distance=dist(a.x, a.y, b.x, b.y)
if(distance<=m.width+s.width)
{
Matter.Body.setStatic(m.body,false)	
}	
}

