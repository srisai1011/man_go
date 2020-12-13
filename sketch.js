
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
const Constraint = Matter.Constraint

var ground,world;
var tree1,boy,launcher1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var stone1;
function preload()
{
	boy=loadImage("images/boy.png");
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ground = new Ground(width/2,600,width,20);
  tree1=new tree(1050,580);
  mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);
   stone1 = new Stone(235,420,30);
  launcher1=new launcher(stone1.body,{x:235,y:420})




	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy,200,340,200,300);
  ground.display();
  tree1.display();
  mango1.display();
  stone1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  launcher1.display();

  detectcollision(stone1,mango1);
  detectcollision(stone1,mango2);
  detectcollision(stone1,mango3);
  detectcollision(stone1,mango4);
  detectcollision(stone1,mango5);
  detectcollision(stone1,mango6);
  detectcollision(stone1,mango7);
  detectcollision(stone1,mango8);
  detectcollision(stone1,mango9);
  detectcollision(stone1,mango10);
  detectcollision(stone1,mango11);
  detectcollision(stone1,mango12);
  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY}) 
}


function mouseReleased()
{
	launcher1.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, {x:235, y:420}) 
	  launcher1.attach(stone1.body);
	}
  }

function detectcollision(lstone,lmango){
var mangoBodyPosition=lmango.body.position;
  var stoneBodyPosition=lstone.body.position;

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

  if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }
}



