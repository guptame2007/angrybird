const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var box1, box2 , box3 , box4;
var ground;
var pig1;
var log1 , log3 ,log4;
var backgroundImage;
var pig2
var log2  ;
var box5;
var bird , platform;  
var slingshot;

function setup()
{

    createCanvas(1200,400);

 
    myEngine = Engine.create();
    backgroundImage = loadImage("sprites/bg.png")

    myWorld = myEngine.world;
    ground = new Ground(600, 390, 1200, 20);
    platform = new Ground(150,300,300,160);
    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    pig1 = new Pig(810,320);
    log1 = new Log(810,260,300, PI/2);
    box3 = new Box(700,240, 70, 70);
    box4 = new Box(920,240, 70, 70);
    pig2 = new Pig(810,240);
    log2 = new Log(810,200,300, PI/2);
    box5 = new Box(810,180, 70, 70);
    log3 = new Log(760,120, 150, PI/7);
   log4 = new Log(870,120, 150, -PI/7);
  bird = new Bird(200,50);
  slingshot = new Slingshot(bird.body , {x:200 , y:50});
}   

function draw()
{
    background(backgroundImage);
   
    textSize(20);
    text(mouseX + "," + mouseY ,50,90)
   
    Engine.update(myEngine);

    ground.display();
   platform.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log4.display();
    log3.display();
    bird.display();
  
    slingshot.display();
}

function mouseDragged()
{
Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY})
}

function mouseReleased()
{
    slingshot.fly();
}

function keyPressed()//function will be called whenever a key is pressed from a keyboard
{
    if(keyCode === 32)//we are pressing space key
    {
slingshot.attach(bird.body);
    }
}