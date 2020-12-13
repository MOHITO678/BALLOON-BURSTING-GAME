var ground,groundimage,bow,bowimage;

var redbimage,bluebimage,greenbimage,pinkbimage,balloon;

var score,arrowGroup,balloonGroup;

function preload(){
 //load your images here 
 
groundimage = loadImage("background0.png")  
  
bowimage = loadImage("bow0.png")  
  
redbimage = loadImage("red_balloon0.png")  
  
bluebimage = loadImage("blue_balloon0.png") 
  
pinkbimage = loadImage("pink_balloon0.png")
  
greenbimage = loadImage("green_balloon0.png")
  
arrowimage = loadImage("arrow0.png")  
  
}

function setup() {
  createCanvas(500, 500);
  
  //add code here
 ground = createSprite(0,0,600,600); 
  
 ground.addImage(groundimage) 
  ground.scale = 2.5;
  
 bow = createSprite(445,220,30,60); 
 bow.addImage(bowimage)
  
  score = 0;
  
  arrowGroup = new Group();
  
  balloonGroup = new Group();
  
}

function draw() {
ground.velocityX = -3
  
  
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  
 spawnballoons();
  
  bow.y=mouseY;
  
if(keyWentDown("space")) {
  createarrow();
  
} 
  
  if(arrowGroup.isTouching(balloon)){
    balloon.lifetime = 0
    arrow.lifetime = 0
    score++
  }
  
  //add code here
  drawSprites();
  
  text(mouseX+ "," +mouseY , 400,20);
  
  text("SCORE = "+score,270,20);

}

function createarrow(){
  arrow = createSprite(375,250,5,10)
    arrow.scale = 0.3;
  arrow.addImage(arrowimage);
  arrow.lifetime = 80;
  arrow.velocityX = -4;
  arrow.y = bow.y;
  arrowGroup.add(arrow)
}

function spawnballoons(){
  if(frameCount%80===0){
    balloon = createSprite(0,Math.round(random(50,400)),20,50);
    balloon.velocityX = 6; 
    var rand = Math.round(random(1,4));
    switch(rand){
      case 1:balloon.addImage(redbimage)
        balloon.scale = 0.1;
        break
        case 2:balloon.addImage(bluebimage)
        balloon.scale = 0.1;
        break
        case 3:balloon.addImage(greenbimage)
        balloon.scale = 0.08;
        break
        case 4:balloon.addImage(pinkbimage)
        balloon.scale = 1;
        break
        default:break;
    }
    balloon.lifetime = 130;
    balloonGroup.add(balloon);        
  }
}








