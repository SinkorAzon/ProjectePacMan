class Food extends GameObject {
  constructor(coordX, coordY){
    super(coordX, coordY);
  }

  show() {
    image(foodImage, this.coordX, this.coordY);
  }

  showInstanceMode(p, img) {
    p.image(img, this.coordX, this.coordY);
  }
}
