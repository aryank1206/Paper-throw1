
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	dustbinImage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   
	
	var options={
		isStatic:true
		}

	
	


    ground=new Ground(400,600,800,30,options)
    
	bin1=new Bin(670,480,15,190,options)
	bin2=new Bin(610,570,120,15,options);
	bin3=new Bin(550,480,15,190,options);
    
	
	dust=new Trash(200,100,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(10000);
  Engine.update(engine)
  
  
  
  dustbinImage.scale=0.0001
  ground.display();
 
  dust.display();
  bin1.display();
  bin2.display();
  bin3.display();
 image(dustbinImage,540,385,140,200);
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(dust.body,dust.body.position,{x:215,y:-265});
	}
}