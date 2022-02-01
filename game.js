class Game {
    constructor() {
      this.canvas = document.getElementById('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.cube = null;
      this.obstacles = [];
      this.coins = [];
      this.background = new Image();
      this.frames = 0;
      this.x = 0;
      this.y = 0;
      this.canvasWidth = 810;
      this.canvasHeight = 410;
      this.intervalId = null;
    }

    start() {
        this.cube = new Component(this, 30, 30, 'red', 0, 180);
        this.circle1 = new Circle(this, 100, 200, 20, 'blue', 7, 'up');
        this.circle2 = new Circle(this, 200, 200, 20, 'blue', 7, 'down');
        this.circle3 = new Circle(this, 300, 200, 20, 'blue', 7, 'up');
        this.circle4 = new Circle(this, 400, 200, 20, 'blue', 7, 'down');
        this.circle5 = new Circle(this, 500, 200, 20, 'blue', 7, 'up');
        this.circle6 = new Circle(this, 600, 200, 20, 'blue', 7, 'down');
        this.circle7 = new Circle(this, 700, 200, 20, 'blue', 7, 'up');
        this.coin = new Circle(this, 50, 300, 5, 'yellow', 0)
        const controls = new Controls(this);
        controls.keyboardEvents();
    
        this.obstacles.push (this.circle1, this.circle2, this.circle3, this.circle4, this.circle5, this.circle6, this.circle7);
        this.coins.push (this.coin);

        //this will make the game run at 60 fps
        this.intervalId = setInterval(() => {
          this.update();
        }, 1000 / 60);
      }

      
    

    update() {
        this.drawBackground();
        this.cube.draw();
        this.circle1.draw();
        this.circle2.draw();
        this.circle3.draw();
        this.circle4.draw();
        this.circle5.draw();
        this.circle6.draw();
        this.circle7.draw()
        this.circle1.circleDir();       
        this.circle2.circleDir();
        this.circle3.circleDir();
        this.circle4.circleDir();
        this.circle5.circleDir();
        this.circle6.circleDir();
        this.circle7.circleDir();
        this.coin.draw();
        this.checkGameOver();
        this.drawScore();

      }

    drawBackground() {
        this.background.src = "/imgs/background.png";
        this.ctx.drawImage(this.background, this.x, this.y, this.canvasWidth, this.canvasHeight);
    }

    stop() {
        clearInterval(this.intervalId);
      }

    clear () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    checkGameOver() {
        const cube = this.cube;
        const crashed = this.obstacles.some(function (obstacle) {
          return cube.crashWith(obstacle);
        });
        if (crashed) {
          this.stop();
          //this.clear();
          //this.start();
        }
        
      }

      checkLevelPassed(){
          const cube = this.cube;
          const collect = this.coins.some(function (coin) {
              return cube.crashWith(coin);
          });
          if (collect) {
              this.clear();
          }
      }

      drawScore() {
        let score = this.intervalId;
        this.ctx.font = '32px serif';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(`Attempt: ${score}`, 100, 30);
      }

}


