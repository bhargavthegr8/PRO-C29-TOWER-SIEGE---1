const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot, polygon;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(705,200,200,10);
 
  //polygon holder with slings
  polygon = Bodies.circle(50, 200,20, {'restitution':0.5, 'friction':0.5, 'density':0.2});
  World.add(world, polygon);
  slingShot = new SlingShot(this.polygon, {x:100, y:200});

  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //second stand
  //level one
  blockII1= new Block(630,175, 30, 40);
  blockII2= new Block(660,175, 30, 40);
  blockII3= new Block(690,175, 30, 40);
  blockII4= new Block(720,175, 30, 40);
  blockII5= new Block(750,175, 30, 40);
  blockII6= new Block(780,175, 30, 40);

  //level two
  blockII7= new Block(660,135, 30, 40);
  blockII8= new Block(690,135, 30, 40);
  blockII9= new Block(720,135, 30, 40);
  blockII10= new Block(750,135, 30, 40);

  //level three
  blockII11= new Block(690, 95, 30, 40);
  blockII12= new Block(720, 95, 30, 40);

  //top
  blockII13= new Block(705, 55, 30, 40);
 
  
  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  fill("skyblue");
  blockII1.display();
  blockII2.display();
  blockII3.display();
  blockII4.display();
  blockII5.display();
  blockII6.display();

  fill("pink");
  blockII7.display();
  blockII8.display();
  blockII9.display();
  blockII10.display();

  fill("turquoise")
  blockII11.display();
  blockII12.display();

  fill("grey");
  blockII13.display();

  imageMode(CENTER);
  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

  slingShot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}
