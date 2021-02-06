const s = ( sketch ) => {
  const HEIGHT_TEXT = 35;
  var timeGame = 180;
  var timeOver = 5;
  var rockImage;
  var foodImage;
  var pacdotImage;
  var pacmanImageRight;
  var pacmanImageLeft;
  var pacmanImageDown;
  var pacmanImageUp;
  var ghostImage;
  var myGame = new Game();
  var myPacman = new Pacman(12*myGame.sizeImage, 12*myGame.sizeImage);
  var myGhostv1 = new Ghost(10*myGame.sizeImage, 13*myGame.sizeImage);
  var myGhostv2 = new Ghost(14*myGame.sizeImage, 11*myGame.sizeImage);
  var arrayRockMaze = [];
  var arrayFoodMaze = [];
  var arrayPacdotMaze = [];
  var mySoundGameOver;
  var mySoundStartGame;
  var mySoundGameOver;
  var mySoundMove;
  var mySoundEat;

  sketch.preload = function() {
    rockImage = sketch.loadImage('/image/rock.jpg');
    foodImage = sketch.loadImage('/image/food.png');
    pacmanImageRight = sketch.loadImage('/image/pacmanRight.gif');
    pacmanImageLeft = sketch.loadImage('/image/pacmanLeft.gif');
    pacmanImageDown = sketch.loadImage('/image/pacmanDown.gif');
    pacmanImageUp = sketch.loadImage('/image/pacmanUp.gif');
    ghostImage = sketch.loadImage('/image/ghost.png');
    pacdotImage = sketch.loadImage('/image/pacdot.png');
    sketch.soundFormats('mp3', 'ogg');
    mySoundGameOver = sketch.loadSound('/assets/Death.mp3');
    mySoundStartGame = sketch.loadSound('/assets/Intro.mp3');
    mySoundEat = sketch.loadSound('/assets/Fruit.mp3');
    mySoundMove = sketch.loadSound('/assets/Chomp.mp3');
  }

  sketch.setup = function() {
    sketch.createCanvas(myGame.columns * myGame.sizeImage, myGame.rows * myGame.sizeImage + HEIGHT_TEXT);

    for (var i = 0; i < myGame.rows; i++) {
      for (var j = 0; j < myGame.columns; j++) { //Pacdot
        if (myGame.maze[i][j] === 0) {
          arrayPacdotMaze.push(new Pacdot(j * myGame.sizeImage, i * myGame.sizeImage));

        } else if (myGame.maze[i][j] === 1) {  //Roca
          arrayRockMaze.push(new Rock(j * myGame.sizeImage, i * myGame.sizeImage));

        } else if (myGame.maze[i][j] === 2) {  //Food
          arrayFoodMaze.push(new Food(j * myGame.sizeImage, i * myGame.sizeImage));

        }
      }
    }
  };

  sketch.draw = function() {
    sketch.background(0);
    //startGame();

    for (let i = 0; i < arrayPacdotMaze.length; i++) {
      console.log("Imprimir una pacdot:" + i);
      arrayPacdotMaze[i].showInstanceMode(sketch, pacdotImage);
      //Eat Pacdot and Delete Food
      if(myPacman.testCollidePacdot(sketch, arrayPacdotMaze[i])){
        arrayPacdotMaze.splice(i, 1);
        myPacman.score = myPacman.score + 10;
      } else {
        console.log("Don't collide with the Pacdot");
      }
    }

    for (let i = 0; i < arrayRockMaze.length; i++) {
      console.log("Imprimir una roca:" + i);
      arrayRockMaze[i].showInstanceMode(sketch, rockImage);
      myPacman.testCollideRock(sketch, arrayRockMaze[i]);
    }

    for (let i = 0; i < arrayFoodMaze.length; i++) {
      console.log("Imprimir una bola:" + i);
      arrayFoodMaze[i].showInstanceMode(sketch, foodImage);
      //Eat Food and Delete Food
      if(myPacman.testCollideFood(sketch, arrayFoodMaze[i])){
        arrayFoodMaze.splice(i, 1);
        myPacman.score = myPacman.score + 100;
        mySoundEat.play();
      } else {
        console.log("Don't collide with the Food");
      }
    }

    showPacman();
    myGhostv1.showInstanceMode(sketch, ghostImage);
    myGhostv2.showInstanceMode(sketch, ghostImage);
    showStatusGame();
    playerLose();
    playerWin();
  }

  sketch.keyPressed = function() {
    let widthGame = myGame.columns * myGame.sizeImage;
    let heightGame = myGame.rows * myGame.sizeImage;

    if(sketch.keyCode === sketch.LEFT_ARROW) {
      myPacman.moveLeft(widthGame);
      //mySoundMove.play();
    } else if(sketch.keyCode === sketch.RIGHT_ARROW) {
      myPacman.moveRight(widthGame);
      //mySoundMove.play();
    } else if(sketch.keyCode === sketch.UP_ARROW) {
      myPacman.moveUp(heightGame);
      //mySoundMove.play();
    } else if(sketch.keyCode === sketch.DOWN_ARROW) {
      myPacman.moveDown(heightGame);
      //mySoundMove.play();
    }
  }

  function showPacman() {
    switch (myPacman.direction) {
      case 1: //Right
        myPacman.showInstanceMode(sketch, pacmanImageRight);

        break;
      case 2: //Left
        myPacman.showInstanceMode(sketch, pacmanImageLeft);

        break;
      case 3: //Up
        myPacman.showInstanceMode(sketch, pacmanImageUp);

        break;
      case 4: //Down
        myPacman.showInstanceMode(sketch, pacmanImageDown);

        break;
      default:

    }
  }

  function showStatusGame(){
    sketch.textSize(24);
    sketch.fill(255);

    sketch.text('Score :', 10, 830);
    sketch.text(myPacman.score, 120, 830);

    sketch.text('Lives :', 310, 830);
    sketch.text(myPacman.lives + " ♥", 393, 830);

    sketch.text('Time :', 650, 830);
    if(sketch.frameCount % 60 == 0 && timeGame != 0) {
      timeGame--;
    }
    sketch.text(timeGame, 730, 830);
  }

  function startGame(){
    mySoundStartGame.play();
    sketch.noLoop();
  }

  function playerLose(){
    if(timeGame == 0 || myPacman.lives == 0) {
      sketch.textSize(30);
      sketch.text("Game Over", 320, 410);
      mySoundGameOver.play();
      sketch.noLoop();
    }
  }

  function playerWin() {
    if(timeGame > 0){
      if(myPacman.lives > 0 && arrayPacdotMaze == 0 && arrayFoodMaze == 0){
        sketch.textSize(30);
        sketch.text("You Win!!!", 330, 410);
        mySoundStartGame.play();
        sketch.noLoop();
      }
    }
  }
}

var myp5 = new p5(s, 'myContainer');
