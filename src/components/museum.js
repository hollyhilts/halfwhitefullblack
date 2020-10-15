// Object components
import Module from './modules'
import Avatar from './avatar'
import Level from './level'

// Background image asset
import World from '../assets/world.png'

const Museum = (p5) => {

  let world, level, avatar;
  const modules = [];

  p5.preload = () => {
    world = p5.loadImage(World)
  }

  p5.setup = () =>  {
    p5.createCanvas(p5.windowWidth/1.1, p5.windowHeight/1.3);
    p5.noStroke();

    // initalize Level
    level = new Level(p5, world)

    // initialize avatar
    avatar = new Avatar(p5, 10);

    // initalize modules
    modules.push(new Module(p5, 20, -10, 0));
    modules.push(new Module(p5, 20, world.width/10, world.height/2));
  }

  p5.draw = () => {
    p5.background(0);

    // update level (first so that it is in the back of the drawing)
    level.render(avatar.posX, avatar.posY);

    // update and redraw avatar and modules
    avatar.update();
    avatar.display();

    modules.forEach(module => {
      module.render(avatar.posX, avatar.posY);
    })

  }

  // myCustomRedrawAccordingToNewPropsHandler
  // ^ for handling props - props need to be passed in to './util/p5' too
}

export default Museum
