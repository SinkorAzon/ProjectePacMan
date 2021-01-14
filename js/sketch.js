const s = ( sketch ) => {
  var rockImage;
  var foodImage;
  var myGame = new Game();
  var arrayRockMaze = [];

  var arrayFoodMaze = [];

  sketch.preload = function() {
    rockImage = sketch.loadImage('/image/rock.jpg');
    foodImage = sketch.loadImage('/image/food.png');
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
  }

  sketch.draw = function() {
    sketch.background(51);

    for (var i = 0; i < arrayRockMaze.length; i++) {
      console.log("Imprimir una roca:" + i);
      arrayRockMaze[i].showInstanceMode(sketch, rockImage);
    }

    for (var i = 0; i < arrayFoodMaze.length; i++) {
      console.log("Imprimir una bola:" + i);
      arrayFoodMaze[i].showInstanceMode(sketch, foodImage);
    }
  }

  sketch.keyPressed = function() {
    if(key === 'a' || keyCode === LEFT_ARROW) {

    } else if(key === 'd' || keyCode === RIGHT_ARROW) {

    } else if(key === 'w' || keyCode === UP_ARROW) {

    } else if(key === 's' || keyCode === DOWN_ARROW) {

    }
  }
}

var myp5 = new p5(s, 'myContainer');
