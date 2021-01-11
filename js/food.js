class Food extends GameObject {
  constructor(coordX, coordY){
    super(coordX, coordY);
  }

  show(sketch, foodImage) {
    sketch.image(foodImage, this.coordX, this.coordY);
  }
}
