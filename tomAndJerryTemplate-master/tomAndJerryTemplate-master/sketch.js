var tom, tomImage;
var jerry, jerryImage;
var garden, gardenImage;
var  jerryCapture, tomCapture;
var tomWalk, jerryWalk;
function preload() {
    //load the images here
    tomImage= loadAnimation("images/tomOne.png"); 
    jerryImage=loadAnimation("images/jerryOne.png");
    gardenImage=loadImage("images/garden.png")
    tomWalk=loadAnimation("images/tomTwo.png", "images/tomThree.png");
    jerryWalk= loadAnimation("images/jerryFour.png");
    tomCapture= loadAnimation("images/tomFour.png")
    jerryCapture= loadAnimation("images/jerryTwo.png", "images/jerryThree.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden= createSprite(500,400,600,600);
    garden.addImage(gardenImage);
    tom = createSprite(600,500, 20, 20);
    tom.addAnimation("tomSit", tomImage);
    tom.scale=0.2
    jerry= createSprite(300,500,50,50);
    jerry.scale= 0.2;
    jerry.addAnimation("jerryEatCheese", jerryImage);
    jerry.addAnimation("jerryCapture", jerryCapture);
    tom.addAnimation("tomCapture", tomCapture)
    tom.addAnimation("tomwalks", tomWalk);
    jerry.addAnimation("jerrywalks", jerryWalk);
}

function draw() {

    background(255,255,255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
     tom.velocityX=0;
     tom.addAnimation("tomCapture",tomCapture);
     tom.x= 300
     tom.changeAnimation("tomCapture");
     jerry.addAnimation("jerryCapture", jerryCapture);
     jerry.changeAnimation("jerryCapture");
    }
    


        



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5; 
    tom.addAnimation("tomRunning", tomWalk);
    tom.changeAnimation("tomRunning");
    
    jerry.addAnimation("jerryWalks", jerryWalk);
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerryWalks");
}
}
