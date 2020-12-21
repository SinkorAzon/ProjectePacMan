
var x = 0;
var myGame = new Game();
var rocaImage;
var arrayRocksMaze = [];

function preload(){
  rocaImage = loadImage('/image/rock.jpg');

}

function setup() {
  createCanvas(myGame.columns * myGame.sizeImage, myGame.rows * myGame.sizeImage);

  for (let i = 0; i < myGame.rows; i++) {
    for (let j = 0; j < myGame.columns; j++) {
      if (myGame.maze[i][j] === 0) {         //Cami


      } else if (myGame.maze[i][j] === 1) {  //Roca
        arrayRocksMaze.push(new Rock(i * myGame.sizeImage, j * myGame.sizeImage));

      } else if (myGame.maze[i][j] === 2) {  //Food


      }
    }
  }
}

function draw() {
  background(000);

  for (var i = 0; i < arrayRocksMaze.length; i++) {
    console.log("Imprimir una roca:" + i);
    arrayRocksMaze[i].show();
  }
}

/*
const s = ( p ) => {


  p.preload = function() {
    var rocaImage;

    rocaImage = loadImage('/image/rock.jpg');
  }

  p.setup = function() {
    var myGame = new Game();
    var arrayRocksMaze = [];

    createCanvas(myGame.columns * myGame.sizeImage, myGame.rows * myGame.sizeImage);

    for (let i = 0; i < myGame.rows; i++) {
      for (let j = 0; j < myGame.columns; j++) {
        if (myGame.maze[i][j] === 0) {         //Cami


        } else if (myGame.maze[i][j] === 1) {  //Roca
          arrayRocksMaze.push(new Rock(i * myGame.sizeImage, j * myGame.sizeImage));

        } else if (myGame.maze[i][j] === 2) {  //Food


        }
      }
    }
  }

  p.draw = function() {
    background(51);

    for (var i = 0; i < arrayRocksMaze.length; i++) {
      console.log("Imprimir una roca:" + i);
      arrayRocksMaze[i].show();
    }
  }
}

let myp5 = new p5(s, 'myContainer');
*/
