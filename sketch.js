const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var fairy,fairyImg;
var star,starImg;
var ground, groundImg;
var hand;
var sound;
    
function preload()
{
  fairyImg=loadAnimation("fairy1.png");
  starImg=loadAnimation("star.png");
  groundImg=loadAnimation("night.jpg");
  sound=loadSound("JoyMusic.mp3");
   //preload the images here
}

function setup() {
	  createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    fairy = createSprite(90,185,200,20);
    fairy.addAnimation("fairy",fairyImg);
    fairy.scale=0.2;
    //World.add(world,fairy);

    star=createSprite(360,30,50,50);
    star.addAnimation("tara",starImg);
	star.scale=0.2;
   // World.add(world,star);

   hand=createSprite(195,185,5,5);
   hand.shapeColor="blue";
   


    var ground_options ={
        isStatic: true
    }

    ground = createSprite(200,200,400,400,ground_options);
    ground.addAnimation("sky",groundImg);
	
   // World.add(world,ground);
}


function draw() {
  background("white");
  ground.depth=fairy.depth;
  fairy.depth=fairy.depth+1;

  fairy.depth=star.depth;

  hand.visible=false;

 // fairy.debug=true;

  //fairy.collide();
  if (hand.isTouching(star)){
	  star.velocityY=0;
	  fairy.velocityX=0;
    sound.play();
  }

   drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
       fairy.velocityX=-3;
	   hand.velocityX=-3;
      }
  
    if(keyCode===RIGHT_ARROW){
       fairy.velocityX=3;
	   hand.velocityX=3;
      }
         
    if(keyCode===DOWN_ARROW){
      star.velocityY=2;
    }
  
    
  }

