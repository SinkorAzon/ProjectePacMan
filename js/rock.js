class Rock extends GameObject {
  constructor(coordX, coordY){
    super(coordX, coordY);
    this.coordX = coordX;
    this.coordY = coordY
  }

  show() {
    image(rocaImage, this.coordX, this.coordY);
  }
}
