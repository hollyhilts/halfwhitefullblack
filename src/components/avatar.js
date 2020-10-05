// User character
export default function Avatar(p5, size) {
  this.posX = 0;
  this.posY = 0;
  this.size = size;

  this.display = function () {
    p5.ellipse(p5.width/2, p5.height/2, this.size);
  }

  this.update = function () {
    if (p5.keyIsDown(p5.LEFT_ARROW)) {
      this.posX -= 3;
    }
    if (p5.keyIsDown(p5.RIGHT_ARROW)) {
      this.posX += 3;
    }
    if (p5.keyIsDown(p5.UP_ARROW)) {
      this.posY -= 3;
    }
    if (p5.keyIsDown(p5.DOWN_ARROW)) {
      this.posY += 3;
    }
  }
}
