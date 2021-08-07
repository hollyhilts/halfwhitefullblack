// import P5Wrapper from "react-p5-wrapper";

const Museum = p5 => {
  // if (typeof window !== "undefined") {
  // const sketch = (p5) => {
  let objs = []
  let objsNum = 360
  const noiseScale = 0.01
  // let R;
  const palette = ["#775c47", "#d7cbb7", "#956337", "#5c4d38", "#dcbd95"]

  p5.setup = () => {
    // console.log(typeof window);
    const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight)
    canvas.position(0, 0)
    canvas.style("z-index", "-10")
    p5.rectMode(p5.CENTER)
    p5.angleMode(p5.DEGREES)
    p5.noStroke()

    for (let i = 0; i < objsNum; i++) {
      objs.push(new Obj(i))
    }

    p5.background("#a19982")
  }

  p5.draw = () => {
    for (let i = 0; i < objs.length; i++) {
      objs[i].move()
      objs[i].checkLife()

      objs[i].display()
    }
  }

  class Obj {
    constructor(tmpIndex) {
      this.index = tmpIndex
      this.init()
    }

    init = () => {
      this.vel = p5.createVector(0, 0)
      this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height))
      this.n = p5.noise(this.pos.x * noiseScale, this.pos.y * noiseScale)
      this.lifeMax = p5.random(20, 100)
      this.life = this.lifeMax
      this.step = p5.random(0.1, 0.5)
      this.hMax = p5.map(this.n, 0, 1, 2, 0.1)
      this.h = this.hMax
      this.rot = p5.map(this.n, 0, 1, -360, 360)
      this.c = p5.random(palette)
    }

    move = () => {
      let theta = p5.map(
        p5.noise(this.pos.x * noiseScale, this.pos.y * noiseScale),
        0,
        1,
        -360,
        360
      )
      this.vel.x = p5.abs(p5.cos(theta))
      this.vel.y = p5.sin(theta)
      this.pos.add(this.vel)

      this.rot = p5.map(
        p5.noise(this.pos.x * noiseScale, this.pos.y * noiseScale),
        0,
        1,
        -360,
        360
      )
    }

    checkLife = () => {
      this.life -= this.step
      this.h = p5.map(this.life, 0, this.lifeMax, 0, this.hMax)
      if (this.life < 0) {
        this.init()
      }
    }

    display = () => {
      p5.fill(this.c)

      p5.push()
      p5.translate(this.pos.x, this.pos.y)
      p5.rotate(this.rot)
      p5.rect(0, 0, this.h * 0.5, this.h)
      p5.pop()
    }
  }
  // };
  // return <P5Wrapper className="p5" sketch={sketch} />;
  // }
}

export default Museum
