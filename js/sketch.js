const s = ( sketch ) => {
  var rockImage;
  var foodImage;
  var pacmanImage;
  var ghostImage;
  var myGame = new Game();
  var myPacman = new Pacman(1*myGame.sizeImage, 12*myGame.sizeImage);
  var myGhostv1 = new Ghost(12*myGame.sizeImage, 10*myGame.sizeImage);
  var myGhostv2 = new Ghost(12*myGame.sizeImage, 14*myGame.sizeImage);
  var arrayRockMaze = [];
  var arrayFoodMaze = [];

  sketch.preload = function() {
    rockImage = sketch.loadImage('/image/rock.jpg');
    foodImage = sketch.loadImage('/image/food.png');
    pacmanImage = sketch.loadImage('/image/pacman.gif');
    ghostImage = sketch.loadImage('/image/ghost.png');
  }

  sketch.setup = function() {
    sketch.createCanvas(myGame.columns * myGame.sizeImage, myGame.rows * myGame.sizeImage);

    for (var i = 0; i < myGame.rows; i++) {
      for (var j = 0; j < myGame.columns; j++) {
        if (myGame.maze[i][j] === 0) {


        } else if (myGame.maze[i][j] === 1) {  //Roca
          arrayRockMaze.push(new Rock(i * myGame.sizeImage, j * myGame.sizeImage));

        } else if (myGame.maze[i][j] === 2) {  //Food
          arrayFoodMaze.push(new Food(i * myGame.sizeImage, j * myGame.sizeImage));

        }
      }
    }
  };

  sketch.draw = function() {
    sketch.background(11);

    for (var i = 0; i < arrayRockMaze.length; i++) {
      //console.log("Imprimir una roca:" + i);
      arrayRockMaze[i].showInstanceMode(sketch, rockImage);
    }

    for (var i = 0; i < arrayFoodMaze.length; i++) {
      //console.log("Imprimir una bola:" + i);
      arrayFoodMaze[i].showInstanceMode(sketch, foodImage);
    }
    myPacman.showInstanceMode(sketch, pacmanImage);
    myGhostv1.showInstanceMode(sketch, ghostImage);
    myGhostv2.showInstanceMode(sketch, ghostImage);
    movePacman();
  }

  sketch.keyPressed = function() {
    if(sketch.keyCode === sketch.LEFT_ARROW) {
      myPacman.moveLeft();
    } else if(sketch.keyCode === sketch.RIGHT_ARROW) {
      myPacman.moveRight();
    } else if(sketch.keyCode === sketch.UP_ARROW) {
      myPacman.moveUp();
    } else if(sketch.keyCode === sketch.DOWN_ARROW) {
      myPacman.moveDown();
    }
  }

  function movePacman() {
    switch (myPacman.direction) {
      case 1: //Left

        break;
      case 2: //Right

        break;
      case 3: //Up

        break;
      case 4: //Down

        break;
      default:

    }
  }
}

var myp5 = new p5(s, 'myContainer');
