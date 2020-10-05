// Interactive modules
export default function Module(p5, size, x, y) {
  this.posX = x;
  this.posY = y;
  this.size = size;

  this.render = function (x, y) {
    p5.ellipse(this.posX - x, this.posY - y, this.size);
  }
}
