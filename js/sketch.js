const s = ( sketch ) => {
  var rockImage;
  var myGame = new Game();
  var arrayRocksMaze = [];

  sketch.preload = function() {
    rockImage = sketch.loadImage('/image/rock.jpg');
  }

  sketch.setup = function() {
    sketch.createCanvas(myGame.columns * myGame.sizeImage, myGame.rows * myGame.sizeImage);

    for (var i = 0; i < myGame.rows; i++) {
      for (var j = 0; j < myGame.columns; j++) {
        if (myGame.maze[i][j] === 0) {         //Cami


        } else if (myGame.maze[i][j] === 1) {  //Roca
          arrayRocksMaze.push(new Rock(i * myGame.sizeImage, j * myGame.sizeImage));

        } else if (myGame.maze[i][j] === 2) {  //Food


        }
      }
    }
  }

  sketch.draw = function() {
    sketch.background(51);

    for (var i = 0; i < arrayRocksMaze.length; i++) {
      console.log("Imprimir una roca:" + i);
      arrayRocksMaze[i].show(sketch, rockImage);
    }
  }
}

var myp5 = new p5(s, 'myContainer');
