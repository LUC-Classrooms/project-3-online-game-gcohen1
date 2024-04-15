/**
 * Project 3 versions 0-4 - 2D Web Game
 * Name: Gracie Cohen
 * 
 * Use this template to get started creating a simple 2D game for the web using P5.js. 
 */
var gameState = "splash"; 
var player1;
var gameTimer; // time game play


function setup() {
   

  createCanvas(600, 400);
player1 = new Player(width/2, height * 4/5); 
console.log(player1); 
gameTimer = new Timer(5000); // 5 sec timer 
}

function draw() {
  background(200);
  /* un-comment each line to see it work */
//splash(); // call the splash screen function (below)
// play(); // call the play screen function (below)
//gameOver(); // call the gameOver screen function (below)
switch(gameState){
  case "splash" :
    splash(); 
    break; 
  case "play" :
    play(); 
    break;
  case "gameOver" :
    gameOver ();
    break;
  default :
    console.log("no match found"); 
}
}

function splash() {
  // this is what you would see when the game starts
  background(200);
  textAlign(CENTER);
  textSize(16);
  text("Let's Play a Game!", width / 2, height / 2);
  textSize(12);
  text("(click the mouse to continue)", width / 2, height / 2 + 30);
}

function play() {
  // this is what you see when the game is running 
  background(0, 200, 0); // green 
  fill(0, 0, 200)
  textAlign(CENTER);
  textSize(16);
  // text("This is where the Game happens", width / 2, height / 2);
  player1.x = mouseX; 
  player1.display();
  if(gameTimer.isFinished()){
    gameState = "gameOver"; 
  }
textAlign(LEFT); 
text("elapsed time:" + gameTimer.elapsedTime, 40, 100); 
// show elapsed time in top left 
}

function gameOver() {
  // this is what you see when the game ends
  background(0);
  fill(255, 0, 0)
  textAlign(CENTER);
  textSize(16);
  text("Game Over!", width / 2, height / 2);
}

function mousePressed() {
  console.log("click!");
  if(gameState == "splash"){
    gameState = "play"; 
    gameTimer.start(); // start timer 
   } else if (gameState == "play"){
    //gameState = "gameOver";
   } else if (gameState == "gameOver"){
      gameState = "splash"; 
   }

function keyPressed() {
    switch(keyCode) {
      case UP_ARROW :
        console.log("up");
        player1.y -= 30 // move up 30px
        player1.angle = 0; // no rtataion
        break;
      case DOWN_ARROW :
        console.log ("down"); 
        break;
      default : // do this if the key doesn't match the list ...
        console.log("press the arrow keys to move player1");
    }
  }
}
  

