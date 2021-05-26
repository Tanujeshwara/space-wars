var bg
var rocket,alien1,alien2,alien3,alien4,alien5,alien6;
var bgimg,rocketimg,alien1img,alien2img,alien3img,alien4img,alien5img,alien6img
var gameState="play"
var alienGroup
var laserGroup
var alien
var score=0

function preload(){
  bgimg=loadImage("images/bg4.png")
  rocketimg=loadImage("images/rocket2.png")
  alien1img=loadImage("images/alien1.png")
  alien2img=loadImage("images/alien2.png")
  alien3img=loadImage("images/alien3.png")
  alien4img=loadImage("images/alien4.png")
  alien5img=loadImage("images/alien5.png")
  alien6img=loadImage("images/alien6.png")
}

function setup() {

 
  createCanvas(1200, 800);
  bg=createSprite(600,400,1200,800)
  bg.addImage(bgimg)
  bg.scale=1.5;
  
  rocket=createSprite(80,400,100,150);
  rocket.addImage(rocketimg);
  rocket.scale=0.2;

  alienGroup=createGroup();

  laserGroup=createGroup();

  
 
 
  
}

function draw() {
  background("black")
  drawSprites();
  
  if(gameState==="play"){

    bg.velocityX=-3;
    if(bg.x<650){
     bg.x=1200;
      
    }
    if(keyDown(UP_ARROW)){
      rocket.y-=5
    }

    if(keyDown(DOWN_ARROW)){
      rocket.y+=5
    }

   
spawnalien();



  }

if(gameState==="end"){



}



  
 }

 function keyPressed(){
   if(keyCode===32 && gameState==="play"){
     releaseLaser();

   }
 }

 function releaseLaser(){

  var laser=createSprite(100,100,60,5);
  laser.shapeColor="red";
  laser.y=rocket.y;
  laser.x=150;
  laser.velocityX=3;
  laser.lifetime=400;
  laserGroup.add(laser);
 }
    
     
 function spawnalien(){
   if(frameCount % 150===0){
     var rand=Math.round(random(10,700))
     alien=createSprite(1200,600,10,10)
    
     
     alien.velocityX=-3
     var randimg=Math.round(random(1,6))
     switch(randimg){
       case 1:alien.addImage(alien1img);
       alien.scale=0.2;
       break;
       case 2:alien.addImage(alien2img);
       alien.scale=0.2;
       break;
       case 3:alien.addImage(alien3img);
        alien.scale=0.5;
       break;
       case 4:alien.addImage(alien4img);
       alien.scale=0.2;
       break;
       case 5:alien.addImage(alien5img);
       alien.scale=0.5;
       break;
       case 6:alien.addImage(alien6img);
       alien.scale=0.2;
       break;

       default:break;
     }
     alien.y=rand
     alienGroup.add(alien);

   }




 }    
      
     
      


