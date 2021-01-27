const s = ( sketch ) => {
  var rockImage;
  var foodImage;
  var pacdotImage;
  var pacmanImageRight;
  var pacmanImageLeft;
  var pacmanImageDown;
  var pacmanImageUp;
  var ghostImage;
  var myGame = new Game();
  var myPacman = new Pacman(12*myGame.sizeImage, 1*myGame.sizeImage);
  var myGhostv1 = new Ghost(10*myGame.sizeImage, 13*myGame.sizeImage);
  var myGhostv2 = new Ghost(14*myGame.sizeImage, 11*myGame.sizeImage);
  var arrayRockMaze = [];
  var arrayFoodMaze = [];
  var arrayPacdotMaze = [];

  sketch.preload = function() {
    rockImage = sketch.loadImage('/image/rock.jpg');
    foodImage = sketch.loadImage('/image/food.png');
    pacmanImageRight = sketch.loadImage('/image/pacmanRight.gif');
    pacmanImageLeft = sketch.loadImage('/image/pacmanLeft.gif');
    pacmanImageDown = sketch.loadImage('/image/pacmanDown.gif');
    pacmanImageUp = sketch.loadImage('/image/pacmanUp.gif');
    ghostImage = sketch.loadImage('/image/ghost.png');
    pacdotImage = sketch.loadImage('/image/pacdot.png');
  }

  sketch.setup = function() {
    sketch.createCanvas(myGame.columns * myGame.sizeImage, myGame.rows * myGame.sizeImage);

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
    sketch.background(11);

    for (var i = 0; i < arrayPacdotMaze.length; i++) {
      console.log("Imprimir una pacdot:" + i);
      arrayPacdotMaze[i].showInstanceMode(sketch, pacdotImage);
    }

    for (var i = 0; i < arrayRockMaze.length; i++) {
      console.log("Imprimir una roca:" + i);
      arrayRockMaze[i].showInstanceMode(sketch, rockImage);
    }

    for (var i = 0; i < arrayFoodMaze.length; i++) {
      console.log("Imprimir una bola:" + i);
      arrayFoodMaze[i].showInstanceMode(sketch, foodImage);
    }
    showPacman();
    myGhostv1.showInstanceMode(sketch, ghostImage);
    myGhostv2.showInstanceMode(sketch, ghostImage);
  }

  sketch.keyPressed = function() {
    let widthGame = myGame.columns * myGame.sizeImage;
    let heightGame = myGame.rows * myGame.sizeImage;

    if(sketch.keyCode === sketch.LEFT_ARROW) {
      myPacman.moveLeft(widthGame);
    } else if(sketch.keyCode === sketch.RIGHT_ARROW) {
      myPacman.moveRight(widthGame);
    } else if(sketch.keyCode === sketch.UP_ARROW) {
      myPacman.moveUp(heightGame);
    } else if(sketch.keyCode === sketch.DOWN_ARROW) {
      myPacman.moveDown(heightGame);
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
}

var myp5 = new p5(s, 'myContainer');
