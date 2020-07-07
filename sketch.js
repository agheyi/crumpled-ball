var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 635, width, 10, {isStatic:true})
	World.add(world, ground)

	paper = Bodies.circle(100, 100, 5);
	World.add(world, paper);
	
	a = Bodies.rectangle(width/2 + 130, 620, 200, 20, {isStatic:true});
	b = Bodies.rectangle(width/2 + 220, 570, 20, 100, {isStatic:true});
	c = Bodies.rectangle(640, 570, 20, 100, {isStatic:true});

	World.add(world, a, b, c);

	Engine.run(engine);
}

function draw() {
	strokeWeight(0);
	background(0);
	Engine.update(engine);
	rectMode(CENTER)
	fill(255);
	rect(ground.position.x, ground.position.y, width, 10);

	fill(100);
	rect(a.position.x, a.position.y, 200, 20);
	rect(b.position.x, b.position.y, 20, 100)
	rect(c.position.x, c.position.y, 20, 100);

	ellipseMode(RADIUS);
	fill(50);
	ellipse(paper.position.x, paper.position.y, 5, 5);
}
function KeyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper, paper.position, {x:0, y:-50})
	}
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(paper, paper.postion, {x: 50, y:0})
	}
}



