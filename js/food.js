class Food extends GameObject {
  constructor(coordX, coordY){
    super(coordX, coordY);
    this.score = 100;
  }

  show() {
    image(foodImage, this.coordX, this.coordY);
  }

  showInstanceMode(p, img) {
    p.image(img, this.coordX, this.coordY);
  }
}
