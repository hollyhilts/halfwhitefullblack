export default function Level(p5, world) {
  this.image = world

  // initial position
  this.width = p5.width/2;
  this.height = p5.height/2;

  this.render = function (x, y) {
    p5.imageMode(p5.CENTER)
    p5.image(
      this.image,
      this.width - x,
      this.height - y,
    )
  }
}
