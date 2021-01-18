class Ghost extends GameObject {
  constructor(coordX, coordY){
    super(coordX, coordY);
  }

  showInstanceMode(sketch, ghostImage) {
    sketch.image(ghostImage, this.coordX, this.coordY);
  }

}
