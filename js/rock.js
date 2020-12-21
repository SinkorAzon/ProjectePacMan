class Rock extends GameObject {
  constructor(coordX, coordY){
    super(coordX, coordY);
  }

  show(sketch, rockImage) {
    sketch.image(rockImage, this.coordX, this.coordY);
  }
}
