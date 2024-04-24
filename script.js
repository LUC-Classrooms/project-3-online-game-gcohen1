/**
 * Project 3 versions 0-4 - 2D Web Game
 * Name: Gracie Cohen
 * 
 * Use this template to get started creating a simple 2D game for the web using P5.js. 
 */
var gameState = "splash"; 
var player1;
var dropTimer; 
var gameTimer; // time game play
var testBox; 
var presents = new Array(0); 
var score = 0; // keep track of points (starting at 0)


function setup() {
   

  createCanvas(600, 400);
player1 = new Player(width/2, height * 4/5); 
console.log(player1); 
  gameTimer = new Timer(10000); // 10 sec timer 
  dropTimer = new Timer(500); 
  testBox = new Box (width/2, height/3); 

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

  testBox.display(); 
  testBox.spin(); 
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
  
    if(dropTimer.isFinished()) {
      let p = new Box(random(width), -40); // new box, anywhere across the width of the canvas, but 40px above the canvas
      presents.push(p); // add object 'p' to the 'presents' Array
      dropTimer.start(); // restart timer for next drop
    }

    for(let i = 0; i < presents.length; i++){
      presents[i].display(); 
      presents[i].move(); 
      presents[i].spin(); 

      let d = dist(presents[i].x, presents[i].y, player1.x, player1.y);
      if (d < 50) {
        // if it's within 50 pixels, do something!
      if (d < 50)
      score ++; // add 1 point }
          presents.splice(i, 1); // remove 1 item at index 'i'
          if (d < 50) {
            presents.splice(i, 1);
            score--; // subtract 1 from 
          }
        }
      }
      if(presents[i].y > height) {
        // present went below the canvas
        presents.splice(i, 1);
        // remove 1 element from from "presents" at index 'i'

      }
    }

  }
textAlign(LEFT); 
text("elapsed time:" + gameTimer.elapsedTime, 40, 100); 
// show elapsed time in top left 
text("Score: " + score, 20, 40);


function gameOver() {
  // this is what you see when the game ends
  background(0);
  fill(255, 0, 0)
  textAlign(CENTER);
  textSize(16);
  text("Game Over!", width / 2, height / 2);
  text("Your final score: " + score, width/2, height * 2/3);
}

function mousePressed() {
  console.log("click!");
  if(gameState == "splash"){
    gameState = "play"; 
    gameTimer.start(); // start timer 
    dropTimer.start();
    score = 0; // reset score to 0 at start of game
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
  

