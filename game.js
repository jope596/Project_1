class Game {
    constructor() {
      this.canvas = document.getElementById('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.cube = null;
      this.obstacles = [];
      this.background = new Image();
      this.frames = 0;
      this.x = 0;
      this.y = 0;
      this.canvasWidth = 800;
      this.canvasHeight = 400;
      this.intervalId = null;
    }

    start() {
        this.cube = new Component(this, 30, 30, 'red', 0, 110);
        const controls = new Controls(this);
        controls.keyboardEvents();
    

        //this will make the game run at 60 fps
        this.intervalId = setInterval(() => {
          this.update();
        }, 1000 / 60);
      }
    

    update() {
        this.drawBackground();
        this.cube.draw();
        
        
      }

    drawBackground() {
        this.background.src = "/imgs/background.png";
        this.ctx.drawImage(this.background, this.x, this.y, this.canvasWidth, this.canvasHeight);
    }
}