class Pacdot extends GameObject {
  constructor(coordX, coordY){
    super(coordX, coordY);
    this.score = 10;
  }

  show() {
    image(pacdotImage, this.coordX, this.coordY);
  }

  showInstanceMode(p, img) {
    p.image(img, this.coordX, this.coordY);
  }
}
