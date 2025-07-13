class Tetromino {
  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
    this.x = 3; // Starting x position
    this.y = 0; // Starting y position
    this.rotation = 0;
  }

  rotate() {
    const rows = this.shape.length;
    const cols = this.shape[0].length;
    const rotatedShape = [];

    for (let i = 0; i < cols; i++) {
      rotatedShape[i] = [];
      for (let j = 0; j < rows; j++) {
        rotatedShape[i][rows - 1 - j] = this.shape[j][i];
      }
    }

    this.shape = rotatedShape;
  }

  moveLeft() {
    this.x--;
  }

  moveRight() {
    this.x++;
  }

  moveDown(board) {
    this.y++;
    // Basic collision detection (bottom of the board)
    if (this.y + this.shape.length > 20) {
      this.y--;
      return false;
    }
    return true;
  }
}

export default Tetromino;