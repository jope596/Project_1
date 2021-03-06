class Controls {
    constructor(game) {
      this.game = game;
      this.cube = this.game.cube;
    }
  
    keyboardEvents() {
      window.addEventListener('keydown', (e) => {
        switch (e.code) {
          case 'ArrowRight':
            if (this.cube.x + this.cube.width < 800) {
              this.cube.x += 30;
            }
            break;
          case 'ArrowLeft':
            if (this.cube.x > 1) {
              this.cube.x -= 30;
            }
            break;
            case 'ArrowUp':
            if (this.cube.y > 0) {
                this.cube.y -= 30;
            }
            break;
            case 'ArrowDown':
            if (this.cube.y + this.cube.height < 400) {
                this.cube.y += 30;
                }
        }
      });
    }
  }