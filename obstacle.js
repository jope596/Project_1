class Circle {
    constructor(game, x, y, radius, color, speed, direction) {
      this.game = game;
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.moveRadius = 100;
      this.color = color;
      this.speed = speed;
      this.direction = direction;
      this.angle = 10;
    }
    left() {
      return this.x - this.radius;
    }
    right() {
      return this.x + this.radius;
    }
  
    top() {
      return this.y - this.radius;
    }
  
    bottom() {
      return this.y + this.radius;
    }

    circleDir() {
        if (this.direction === 'up') {
            this.y -= this.speed;
            if (this.y - this.radius <= 0){
                this.direction = 'down';}
        } else {
            this.y += this.speed;
            if (this.y + this.radius >= this.game.canvasHeight){ 
                this.direction = 'up';
        }
    }
        }

    /* new class CircleRound extends Circle

    if (this.direction ==='round') {
        this.angle++
        this.x  = (this.moveRadius * Math.cos(this.angle * (Math.PI/20))) + 400;
        this.y = (this.moveRadius * Math.sin(this.angle * (Math.PI/20))) + 200;
}  */



    draw() {
      const ctx = this.game.ctx;
      ctx.fillStyle = this.color
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fill()
      ctx.closePath();

    }
  }