function Grapes(coordX,coordY) {
  this.coordX=coordX;
  this.coordY=coordY;

  this.show = function(){
    image(grapeImage, this.coordX, this.coordY);
  }
}
