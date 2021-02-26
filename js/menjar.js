class PopUp extends GameObject {
  constructor(coordX, coordY){
    super(coordX, coordY);
    this.score = 1000;
  }

  show() {
    image(foodImage, this.coordX, this.coordY);
  }

  showInstanceMode(p, img) {
    p.image(img, this.coordX, this.coordY);
  }
}
