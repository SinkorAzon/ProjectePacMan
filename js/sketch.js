const s = ( sketch ) => {
  const HEIGHT_TEXT =55;
  var timeGame;
  var fr = 30; //starting FPS
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
  var arrayRockMaze = [];
  var arrayFoodMaze = [];
  var arrayGhostMaze = [];
  var arrayPacdotMaze = [];
  var arrayCherryMaze = [];
  var mySoundGameOver;
  var mySoundStartGame;
  var mySoundGameOver;
  var mySoundMove;
  var mySoundEat;
  var url = window.location.search;
  var urlParams = new URLSearchParams(url);
  var dif = urlParams.get('dif');
  var user = urlParams.get("user");
  var email = urlParams.get('email');
  var nomUsuariK = localStorage.getItem("nomUsuariKey");
  var emailK = localStorage.getItem("emailKey");
  var difK = localStorage.getItem("difKey");

  sketch.preload = function() {
    rockImage = sketch.loadImage('image/rock.jpg');
    foodImage = sketch.loadImage('image/food.png');
    cherryImage = sketch.loadImage('image/menjar.png')
    pacmanImageRight = sketch.loadImage('image/pacmanRight.gif');
    pacmanImageLeft = sketch.loadImage('image/pacmanLeft.gif');
    pacmanImageDown = sketch.loadImage('image/pacmanDown.gif');
    pacmanImageUp = sketch.loadImage('image/pacmanUp.gif');
    ghostImage = sketch.loadImage('image/ghost.png');
    pacdotImage = sketch.loadImage('image/pacdot.png');
    sketch.soundFormats('mp3', 'ogg');
    mySoundGameOver = sketch.loadSound('assets/Death.mp3');
    mySoundWinGame = sketch.loadSound('assets/Win.mp3');
    mySoundStartGame = sketch.loadSound('assets/Intro.mp3');
    mySoundEat = sketch.loadSound('assets/Fruit.mp3');
    mySoundMove = sketch.loadSound('assets/Chomp.mp3');
  }

  sketch.setup = function() {
    sketch.createCanvas(myGame.columns * myGame.sizeImage, myGame.rows * myGame.sizeImage + HEIGHT_TEXT);
    sketch.frameRate(fr); // Attempt to refresh at starting FPS
    console.log(nomUsuariK + " / " + emailK + " / " + difK);
    startGame();
  };

  function startGame(){
    switch (dif) {
      case "0":
        timeGame = 300;
        myPacman.lives = 10;
        //console.log("0");
        break;
      case "1":
        timeGame = 180;
        myPacman.lives = 5;
        //console.log("1");
        break;
      case "2":
        timeGame = 120;
        myPacman.lives = 3;
        //console.log("2");
        break;
      case "3":
        timeGame = 90;
        myPacman.lives = 1;
        //console.log("3");
        break;
      default:

    }
    fillMap();
  }

  function fillMap(){
    mySoundStartGame.play();
    for (var i = 0; i < myGame.rows; i++) {
      for (var j = 0; j < myGame.columns; j++) { //Pacdot
        if (myGame.maze[i][j] === 0) {
          arrayPacdotMaze.push(new Pacdot(j * myGame.sizeImage, i * myGame.sizeImage));

        } else if (myGame.maze[i][j] === 1) {  //Roca
          arrayRockMaze.push(new Rock(j * myGame.sizeImage, i * myGame.sizeImage));

        } else if (myGame.maze[i][j] === 2) {  //Food
          arrayFoodMaze.push(new Food(j * myGame.sizeImage, i * myGame.sizeImage));

        } else if(myGame.maze[i][j] === 3) {
          arrayCherryMaze.push(new PopUp(j * myGame.sizeImage, i * myGame.sizeImage));

        } else if(myGame.maze[i][j] === 4) {
          arrayGhostMaze.push(new Ghost(j * myGame.sizeImage, i * myGame.sizeImage));

        }
      }
    }

  }

  sketch.draw = function() {
    sketch.background(0);

    for (let i = 0; i < arrayPacdotMaze.length; i++) {
      //console.log("Imprimir una pacdot:" + i);
      arrayPacdotMaze[i].showInstanceMode(sketch, pacdotImage);
      //Eat Pacdot and Delete Food
      if(myPacman.testCollidePacdot(sketch, arrayPacdotMaze[i])){
        myPacman.score = myPacman.score + arrayPacdotMaze[i].score;
        arrayPacdotMaze.splice(i, 1);
        mySoundEat.play();
      } else {
        //console.log("Don't collide with the Pacdot");
      }
    }

    for (let i = 0; i < arrayRockMaze.length; i++) {
      //console.log("Imprimir una roca:" + i);
      arrayRockMaze[i].showInstanceMode(sketch, rockImage);
      myPacman.testCollideRock(sketch, arrayRockMaze[i]);
    }

    for (let i = 0; i < arrayFoodMaze.length; i++) {
      //console.log("Imprimir una bola:" + i);
      arrayFoodMaze[i].showInstanceMode(sketch, foodImage);
      //Eat Food and Delete Food
      if(myPacman.testCollideFood(sketch, arrayFoodMaze[i])){
        arrayFoodMaze.splice(i, 1);
        myPacman.score = myPacman.score + 100;
        mySoundEat.play();
      } else {
        //console.log("Don't collide with the Food");
      }
    }

    for (let i = 0; i < arrayCherryMaze.length; i++) {
      //console.log("Imprimir una bola:" + i);
      arrayCherryMaze[i].showInstanceMode(sketch, cherryImage);
      //Eat Food and Delete Food
      if(myPacman.testCollideFood(sketch, arrayCherryMaze[i])){
        arrayCherryMaze.splice(i, 1);
        myPacman.score = myPacman.score + 250;
        myPacman.lives = myPacman.lives + 1;
        timeGame = timeGame + 10;
        mySoundEat.play();
      } else {
        //console.log("Don't collide with the Food");
      }
    }

    for (let i = 0; i < arrayGhostMaze.length; i++) {
      //console.log("Imprimir una roca:" + i);
      arrayGhostMaze[i].showInstanceMode(sketch, ghostImage);
      //Collide Ghost = Game Over
      if(myPacman.testCollideGhost(sketch, arrayGhostMaze[i])){
        myPacman.lives = 0;
      }
    }

    showPacman();
    showStatusGame();
    playerLose();
    playerWin();
  }

  sketch.keyPressed = function() {
    let widthGame = myGame.columns * myGame.sizeImage;
    let heightGame = myGame.rows * myGame.sizeImage;
    if(!mySoundStartGame.isPlaying()){
      if(sketch.keyCode === sketch.LEFT_ARROW) {
        myPacman.moveLeft(widthGame);
        mySoundMove.play();
      } else if(sketch.keyCode === sketch.RIGHT_ARROW) {
        myPacman.moveRight(widthGame);
        mySoundMove.play();
      } else if(sketch.keyCode === sketch.UP_ARROW) {
        myPacman.moveUp(heightGame);
        mySoundMove.play();
      } else if(sketch.keyCode === sketch.DOWN_ARROW) {
        myPacman.moveDown(heightGame);
        mySoundMove.play();
      }
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

  function difMode(dificultat){
    switch (dif) {
      case "0":
        dificultat = "Mode Easy";
        break;
      case "1":
        dificultat = "Mode Standard";
        break;
      case "2":
        dificultat = "Mode Hard ☠";
        break;
      case "3":
        dificultat = "Mode Hell ☠ ☠ ☠";
        break;
      default:

    }
    return dificultat;
  }

  function showStatusGame(){
    sketch.textSize(24);
    sketch.fill(255);
    let dificultat;

    sketch.text('Score :', 10, 825);
    sketch.text(myPacman.score, 120, 825);

    sketch.text('Lives :', 210, 825);
    sketch.text(myPacman.lives + " ♥", 293, 825);

    sketch.text(difMode(dificultat), 400, 825);

    sketch.text('Time :', 650, 825);
    if(!mySoundStartGame.isPlaying()){
      if(sketch.frameCount % fr == 0 && timeGame != 0) {
        timeGame--;
      }
    }
    sketch.text(timeGame, 730, 825);
    sketch.textSize(14);
    sketch.text("© Game Created By Eric Quintana", 300, 850);
  }

  function playerLose(){
    if(timeGame == 0 || myPacman.lives == 0) {
      mySoundGameOver.play();
      let miss = "Game Over!\nVols tornar a jugar?";
      var continuar = confirm(miss);
      if(continuar == true){
        sketch.noLoop();
        mySoundGameOver.addCue(mySoundGameOver.duration() - 0.01, restartGame);
        restartGame();
      } else {
          window.history.back();
      }
    }
  }

  function playerWin() {
    let dificultat;

    if(user == ""){
      user = "Anonymous";
    }

    if(email == ""){
      email = "anonymous@randomail.pacman"
    }

    if(timeGame > 0){
      if(myPacman.lives > 0 && arrayFoodMaze == 0 && arrayPacdotMaze == 0){
      //if(myPacman.lives > 0 && myPacman.score >= 100){
        mySoundWinGame.play();
        let miss = "Enhorabona has guanyat " + user + "!!\nEmail = " + email + "\nDificultat = " + difMode(dificultat) + "\nTemps Restant = " + timeGame + "\nVides Restants = " + myPacman.lives + "\nPunts Totals = " + myPacman.score + "\nPrem Ok per tornar a Jugar o Cancel per Sortir.";
        var continuar = confirm(miss);
        if(continuar == true){
          sketch.noLoop();
          mySoundStartGame.addCue(mySoundStartGame.duration() - 0.01, restartGame);
          restartGame();
        } else {
          window.history.back();
        }
      }
    }
  }

  function restartGame(){
    window.location.reload();
    /*
    sketch.clear();
    myPacman.coordX = 12 * myGame.sizeImage;
    myPacman.coordY = 12 * myGame.sizeImage;
    myPacman.lives = 5;
    myPacman.score = 0;
    timeGame = 180;
    fillMap();
    sketch.loop();
    */
  }
}

var myp5 = new p5(s, 'myContainer');
