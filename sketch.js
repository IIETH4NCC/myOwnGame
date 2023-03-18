GAMESTATE="startMenu"
player1Lives=3
player1Health=100
minutesSurvived=0


var player1, playerRunRight,playerRunLeft
var ground,groundImage
var testBackground, testBackgroundImg




function preload(){
 playerRunRight=loadAnimation("Assets/playerRunRight1.png","Assets/playerRunRight2.png","Assets/playerRunRight3.png","Assets/playerRunRight4.png","Assets/playerRunRight5.png","Assets/playerRunRight6.png","Assets/playerRunRight7.png","Assets/playerRunRight8.png",);
 playerRunLeft=loadAnimation("Assets/playerRunLeft1.png","Assets/playerRunLeft2.png","Assets/playerRunLeft3.png","Assets/playerRunLeft4.png","Assets/playerRunLeft5.png","Assets/playerRunLeft6.png","Assets/playerRunLeft7.png","Assets/playerRunLeft8.png");

 playerIdleLeft=loadAnimation("Assets/playerIdleLeft1.png","Assets/playerIdleLeft2.png","Assets/playerIdleLeft2.png","Assets/playerIdleLeft1.png");
 playerIdleRight=loadAnimation("Assets/playerIdleRight1.png","Assets/playerIdleRight2.png","Assets/playerIdleRight2.png","Assets/playerIdleRight1.png");

 //playerPunchRight=loadAnimation("Assets/playerPunchRight1.png","Assets/playerPunchRight2.png","Assets/playerPunchRight3.png","Assets/playerPunchRight4.png","Assets/playerPunchRight5.png","Assets/playerPunchRight6.png",);
 //playerPunchLeft=loadAnimation("Assets/playerPunchLeft1.png","Assets/playerPunchLeft2.png","Assets/playerPunchLeft3.png","Assets/playerPunchLeft4.png","Assets/playerPunchLeft5.png","Assets/playerPunchLeft6.png",)

 playerJumpLeft=loadAnimation("Assets/playerJumpLeft1.png","Assets/playerJumpLeft2.png","Assets/playerJumpLeft3.png")
 playerJumpRight=loadAnimation("Assets/playerJumpRight1.png","Assets/playerJumpRight2.png","Assets/playerJumpRight3.png")
 //restart button
 restartImg=loadImage("Assets/restart.png");

 groundImage=loadImage("Assets/ground2.png");
 testBackgroundImg=loadImage("Assets/background.png");
 
 //MUSIC
 pauseMenu=loadSound("Sounds/cheapShop.mp3");
 gameSong=loadSound("Sounds/inGame1.mp3");
 gameSong2=loadSound("Sounds/inGame2.mp3")
 startMenu=loadSound("Sounds/startingScreenSong.mp3");
 //SFX
 jumpSound=loadSound("Sounds/jump.wav");
 runningSound=loadSound("Sounds/run.mp3");
 shootSound=loadSound("Sounds/shoot.mp3");
 bossTime=loadSound("Sounds/inBossEncounter.mp3");
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  //camera.x=player1.x
  //camera.y=player1.y

 //ground
 ground=createSprite(windowWidth/2,windowHeight,windowWidth,20);
 borderLeft=createSprite(windowWidth/170,windowHeight/2,20,windowHeight);
 borderRight=createSprite(windowWidth-10,windowHeight/2,20,windowHeight);
 restart=createSprite(windowWidth/2,windowHeight,50,50);
//platforms  
/*
platformGroup= new Group(); 

platform1=createSprite(windowWidth/4,windowHeight-200,120,10);
 platform1.shapeColor=("black")
 platformGroup.add(platform1);
 platform2=createSprite(windowWidth-500,windowHeight-200,120,10);
 platform2.shapeColor=("black")
 platformGroup.add(platform1);
 platform3=createSprite(windowWidth-900,windowHeight-300,120,10);
 platform3.shapeColor=("black")
 platformGroup.add(platform3);
 platform4=createSprite(windowWidth/4 +300,windowHeight-300,120,10);
 platform4.shapeColor=("black")
 platformGroup.add(platform4);
 platform5=createSprite(windowWidth/2,windowHeight-500,120,10);
 platform5.shapeColor=("black")
 platformGroup.add(platform5);
 */
//Side OBJECT GROUP
horizontalObjectGroup= new Group();
//bullet group
bullets = new Group();
 //player 1 config
 player1=createSprite(windowWidth/2,windowHeight,20,10);
 
 player1.addAnimation("idleLeft",playerIdleLeft);
 player1.addAnimation("idleRight",playerIdleRight);

 player1.addAnimation("runRight",playerRunRight);
 player1.addAnimation("runLeft",playerRunLeft);
 
 player1.addAnimation("jumpLeft",playerJumpLeft);
 player1.addAnimation("jumpRight",playerJumpRight);
 player1.scale=1.5;
 //player1.debug=true;
 player1.setCollider("rectangle",0,0,30,90)

//player 2 config
// player2=createSprite(windowWidth/2 +200 ,windowHeight,20,10);
 
 //player2.addAnimation("idleLeft",playerIdleLeft);
 //player2.addAnimation("idleRight",playerIdleRight);

 //player2.addAnimation("runRight",playerRunRight);
 //player2.addAnimation("runLeft",playerRunLeft);
 


 //player2.scale=2;
 //player2.debug=true;
 //player2.setCollider("rectangle",0,0,30,90)


 
}

function draw(){
  background(testBackgroundImg);
  //START MENU GAME STATE --------------------------------------------------------------
  if(GAMESTATE=="startMenu"){
 // player2.visible=false;
 
 player1.visible=false;
  restart.visible=false;
  ground.visible=false;
  borderLeft.visible=false;
  borderRight.visible=false;


  background("black");
    fill("white");
	 textSize(50)
   text("Press space to play",windowWidth/2 -200,windowHeight/2);

  
  
  if(keyDown("space")){
  GAMESTATE="play";
  gameSong.loop();
 
  player1.visible=true;
  ground.visible=true;
  /*
  platform1.visible=true;
  platform2.visible=true;
  platform3.visible=true;
  platform4.visible=true;
  platform5.visible=true;
  */
 // player2.visible=true;
  }
  }
  //--------------------------------------------------------------------------------------

 
  //player2.collide(ground);
  //PAUSE GAME-------------------------------------------------------------------------------
  if(GAMESTATE=="pause"){
   
   
    fill("white");
	 textSize(20)
   text("Come onnnn.",player1.x-50,player1.y-100);
   background("black");
   fill("Green");
   textSize(50)
   text("GAME PAUSED",windowWidth/2 -200,windowHeight/2);
   textSize(20);
   text("PRESS SPACE TO PLAY",windowWidth/2 -130 ,windowHeight-300);
    player1.velocityY=0;
    player1.velocityX=0;
   // player2.velocityX=0;
    //player2.velocityY=0;

  horizontalObjectGroup.visible=false;
  horizontalObjectGroup.setVelocityXEach(0);
    if(keyDown("space")){  
      GAMESTATE="play"
      pauseMenu.stop();
      gameSong.play();
    horizontalObjectGroup.setVelocityXEach(-60);
    }
  
    
  }


 //--------------------------------------------------------------- 
 //ACTIVE GAME----------------------------------------------------------------------------
 if(GAMESTATE=="play"){
 
 
  player1.collide(ground);
  player1.collide(borderLeft);
  player1.collide(borderRight);
 /* player1.collide(platform1);
  player1.collide(platform2);
  player1.collide(platform3);
  player1.collide(platform4);
  player1.collide(platform5)
  */
  //timer
  if(frameCount%1800==0){
    minutesSurvived+=1;
  }

 //PLAYER CODE-------------------------------------------------------------------------------------------
   //Player health
   fill("green");
	 textSize(20)
   text(player1Health,player1.x-15,player1.y-70);
   textSize(25)
   fill("black");
   text("▐ HP▐",player1.x-40,player1.y-90);
 
   //playerTimeSurvived
   fill("Black");
	 textSize(40)
   text(minutesSurvived,windowWidth/2,windowHeight/5);
   text("Minutes survived:",windowWidth/2 -140,windowHeight/7);
 
   //player lives
   fill("red");
	 textSize(40)
   text(player1Lives,player1.x,player1.y-110);

//PLAYER CONTROLS-----------------------------------------------------------------------------------------

//RIGHT 
 if(keyDown("d")){
  player1.x+= 10;
  player1.changeAnimation("runRight");
  if(keyDown("a")){
  player1.velocityX=0
  player1.changeAnimation("idleLeft");
  }
}
if(keyWentUp("d")){
  player1.x+=0;
  player1.changeAnimation("idleRight");
}
//LEFT
if(keyDown("a")){
 player1.x-=10;
 player1.changeAnimation("runLeft");
 if(keyDown("d")){
  player1.velocityX=0
  player1.changeAnimation("idleRight");
  }
}
if(keyWentUp("a")){
player1.x+=0;
player1.changeAnimation("idleLeft");
}




//UP
if(keyDown("w")){

if(frameCount%20==0){
player1.velocityY-=60;
jumpSound.play();
}



}



//player SHOOT
if(keyDown("f")){
 
  if(frameCount%15==0){
if(keyDown("a")){
bullet=createSprite(player1.x-30,player1.y,15,10);
bullet.shapeColor=("red")
bullet.velocityX-=40
shootSound.play();
bullet.lifetime=0.5;
bullets.add(bullet);
}
if(keyDown("d")){
  bullet=createSprite(player1.x+30,player1.y,15,10);
  bullet.velocityX+=40
  bullet.shapeColor=("red")
shootSound.play();
bullet.lifetime=0.5;
bullets.add(bullet);
  }
  
}
}

/*
//PLAYER2 CONTROLS
//RIGHT 
 if(keyDown("l")){
  player2.x+= 7;
  player2.changeAnimation("runRight");

}
if(keyWentUp("l")){
  player2.x+=0;
  player2.changeAnimation("idleRight");
}
//LEFT
if(keyDown("j")){
 player1.x-=7;
 player1.changeAnimation("runLeft");

}

if(keyWentUp("j")){
player2.x+=0;
player2.changeAnimation("idleLeft");
}

//IF PLAYER PRESSES BOTH RUNNING KEYS AT SAME TIME, PLAYER WILL STAND
if(keyDown("l")&&keyDown("j")){
  player2.velocityX=0
  player2.changeAnimation("idleLeft");

}

//UP
if(keyDown("i")){

if(frameCount%20==0){
player2.velocityY-=30;
jumpSound.play();
//player1.changeAnimation("jumpRight");
}

}
*/

//player rules
player1.velocityY+=5;
//player2.velocityY+=2;


//PAUSE  INPUT
if(keyDown("p")){
  GAMESTATE="pause"
  gameSong.stop();
  pauseMenu.loop();
  }
 
 
  if(horizontalObjectGroup.isTouching(player1)){
    horizontalObjectGroup.collide(player1);
    player1Health-=20;
  }
  
 

  
  



//END OF PLAYER STUFF-------------------------------------------------------------------








}

  


 














//createEnemyRight();

spawnObjectRight();
spawnObjectLeft();



drawSprites()
}


function spawnObjectRight(){
  if(frameCount%50==0){
  var objectRight=createSprite(windowWidth+300,10,10)
  objectRight.y=random(300,windowHeight)
  objectRight.velocityX-=20;
  horizontalObjectGroup.add(objectRight);
  objectRight.lifetime=1000;
  }
}

function spawnObjectLeft(){
  if(frameCount%70==0){
  var objectLeft=createSprite(windowWidth-2000,10,10)
  objectLeft.y=random(300,windowHeight)
  objectLeft.velocityX+=10;
  horizontalObjectGroup.add(objectLeft);
  objectLeft.lifetime=1000;
  }
}




