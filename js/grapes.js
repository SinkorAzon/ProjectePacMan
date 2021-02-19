class Grapes extends GameObject {
  constructor(coordX, coordY){
    super(coordX, coordY);
  }

  show(sketch, grapeImage) {
    sketch.image(grapeImage, this.coordX, this.coordY);
  }
}
