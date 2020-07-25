const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	back = loadImage("Lab Back.jpg");
}

function setup() {
	createCanvas(1200, 650);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(width/2, height-100);
	bob2 = new Bob(499, height-100);
	bob3 = new Bob(701, height-100);
	bob4 = new Bob(398, height-100);
	bob5 = new Bob(802, height-100);

	stand = new Stand(width/2, height-600);

	thread1 = new Thread(bob1.body, {x:width/2, y:50});
	thread2 = new Thread(bob2.body, {x:499, y:50});
	thread3 = new Thread(bob3.body, {x:701, y:50});
	thread4 = new Thread(bob4.body, {x:398, y:50});
	thread5 = new Thread(bob5.body, {x:802, y:50});

	Engine.run(engine);

}


function draw() {
	Engine.update(engine);
  	background(back);

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	stand.display();

	thread1.display();
	thread2.display();
	thread3.display();
	thread4.display();
	thread5.display();
}

//function keyPressed(UP_ARROW){
	//bob4.velocityX = -100;	
//}

function mouseDragged(){
	Matter.Body.setPosition(bob4.body, {x: mouseX, y: mouseY});
}
//function mouseReleased(){

//}