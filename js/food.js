function Food(coordX,coordY) {
  this.coordX=coordX;
  this.coordY=coordY;

  this.show = function(){
    image(foodImage, this.coordX, this.coordY);
  }
}
