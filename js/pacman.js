class Pacman extends GameObject {
  constructor(coordX, coordY){
    super(coordX, coordY);
    this.direction = 1; //Left-1, Right-2, Up-3, Down-4
    this.speed = 32;
    this.live = 3;
    this.score = 0;
  }

  showInstanceMode(sketch, pacmanImage) {
    sketch.image(pacmanImage, this.coordX, this.coordY);
  }

  moveRight(widthGame){
    this.direction = 1;
    this.coordX = this.coordX + this.speed;

    if(this.coordX > widthGame - (this.speed * 2)) {
      this.coordX = widthGame - (this.speed * 2);
    } else {
      console.log("Move Right OK");
    }
  }

  moveLeft(widthGame){
    this.direction = 2;
    this.coordX = this.coordX - this.speed;

    if(this.coordX <= 0 + this.speed) {
      this.coordX = 0 + this.speed;
    } else {
      console.log("Move Left OK");
    }
  }

  moveUp(heightGame){
    this.direction = 3;
    this.coordY = this.coordY - this.speed;

    if(this.coordY <= 0 + this.speed) {
      this.coordY = 0 + this.speed;
    } else {
      console.log("Move Up OK");
    }
  }

  moveDown(heightGame){
    this.direction = 4;
    this.coordY = this.coordY + this.speed;

    if(this.coordY > heightGame - (this.speed * 2)) {
      this.coordY = heightGame - (this.speed * 2);
    } else {
      console.log("Move Down OK");
    }
  }

  testCollideRock(sketch, rock){
    let distance = sketch.dist(this.coordX, this.coordY, rock.coordX, rock.coordY);
    if(distance < 32){
      switch (this.direction) {
        case 1: //Right
          this.coordX = this.coordX - this.speed;
          break;
        case 2: //Left
          this.coordX = this.coordX + this.speed;
          break;
        case 3: //Up
          this.coordY = this.coordY + this.speed;
          break;
        case 4: //Down
          this.coordY = this.coordY - this.speed;
          break;
        default:

      }
    } else {
      console.log("Don't collide with the Rock");
    }
  }

  testCollideFood(sketch, food){
    let distance = sketch.dist(this.coordX, this.coordY, food.coordX, food.coordY);
    if(distance < 32){
      return true;
    } else {
      return false;
    }
  }

  testCollidePacdot(sketch, pacdot){
    let distance = sketch.dist(this.coordX, this.coordY, pacdot.coordX, pacdot.coordY);
    if(distance < 32){
      return true;
    } else {
      return false;
    }
  }
}
