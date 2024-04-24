/**
 * Project 3 versions 0-4 - 2D Web Game
 * Name: Gracie Cohen
 * 
 * Use this template to get started creating a simple 2D game for the web using P5.js. 
 */
var gameState = "splash"; 
new Player(width/2, height * 4/5); 
var dropTimer; // reuglates box drops
var gameTimer; // time game play
var testBox; // box preview on the screen
var presents = new Array(0); // empty array "presents"
var score = 0; // keep track of points (starting at 0)


function setup() {
   

  createCanvas(520, 400);
player1 = new Player(width/2, height * 4/5); 
console.log(player1); 
  gameTimer = new Timer(10000); // 10 sec timer 
  dropTimer = new Timer(500); 
  testBox = new Box (width/2, height/3); 

}

function draw() {
  background(200);
  /* un-comment each line to see it work */
// splash(); // call the splash screen function (below)
// play(); // call the play screen function (below)
// gameOver(); // call the gameOver screen function (below)
switch (gameState)  {
  case "splash" :
    splash(); // go to the "splash" screen
    break;
  case "play" :
    play(); // go to the "play" screen
    break;
  case "gameOver" :
    gameOver(); // go to the "game over" screen
    break;
  default :
    console.log("no match found - check your mousePressed() function!");
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
  if(gameTimer.isFinished()) {
    gameState = "gameOver"; 
  
    if(dropTimer.isFinished()) {
      let p = new Box(random(width), -40); // new box, anywhere across the width of the canvas, but 40px above the canvas
      presents.push(p); // add object 'p' to the 'presents' Array
      dropTimer.start(); // restart timer for next drop
    }

    for(let i = 0; i < presents.length; i++); {//for each element of the array, 
    // represented by 'i', do the following: 
      presents[i].display(); 
      presents[i].move(); 
      presents[i].spin(); 
      if(presents[i].y > height){
        // present went below canvas
        presents.splice(i,1); // // remove 1 element from from "presents" at index 'i'

      let d = dist(presents[i].x, presents[i].y, player1.x, player1.y);
      if (d < 50) {
        // if it's within 50 pixels, do something!
      if (d < 50) {
        presents.splice(i, 1); 
          // remove 1 item at index 'i'
        }
      }
      }
    }
      }
      if(presents[i].y > height) {
        // present went below the canvas
        presents.splice(i, 1);
        // remove 1 element from from "presents" at index 'i'

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
}

function mousePressed() {
  if(gameState == "splash") { 
    gameState = "play"; 
} // go to "play"
else if(gameState == "play") { 
    gameState = "gameOver"; 
} // go to "gameOver"
else if(gameState == "gameOver") { 
    gameState = "splash"; 
} // go to "splash"
    gameTimer.start(); // start timer 
    dropTimer.start(); // start timer for presents
    score = 0; // reset score to 0 at start of game

   } 
   

function keyPressed() {
  switch(keyCode) {
    case UP_ARROW :
      player1.y -= 30 // move up 30px
  player1.angle = 0; // no rotation
  if(player1.y < 0) player1.y = height;
      break;
    case DOWN_ARROW :
      player1.y += 30 // move down 30px
      player1.angle = PI ; // point down (rotate 180 deg.)
  if(player1.y > height) player1.y = 0; // wrap to top
      break;
      case RIGHT_ARROW :
        player1.y -= 15 // move right 15px
    player1.angle = 5; // 5 rotation
  if(player1.y < 0) player1.y = height;
        break;
      case LEFT_ARROW :
        player1.y += 15 // move left 15px
        player1.angle = -5 ; // -5 rotation
  if(player1.y > height) player1.y = 0; // wrap to top
        break;
    default : // do this if the key doesn't match the list ...
      console.log("press the arrow keys to move player1");
  }
}
  

  

