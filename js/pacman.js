class Pacman extends GameObject {
  constructor(coordX, coordY){
    super(coordX, coordY);
    this.direction = 1; //Left-1, Right-2, Up-3, Down-4
    this.speed = 32;
    this.live = 3;
  }

  showInstanceMode(sketch, pacmanImage) {
    sketch.image(pacmanImage, this.coordX, this.coordY);
  }

  moveRight(){
    this.coordX = this.coordX + this.speed;
  }

  moveLeft(){
    this.coordX = this.coordX - this.speed;
  }

  moveUp(){
    this.coordY = this.coordY - this.speed;
  }

  moveDown(){
    this.coordY = this.coordY + this.speed;
  }
}
