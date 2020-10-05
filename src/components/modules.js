// Interactive modules
export default function Module(p5, size, x, y) {
  this.posX = x;
  this.posY = y;
  this.size = size;

  this.display = function () {
    p5.ellipse(this.posX, this.posY, this.size);
  }
}
