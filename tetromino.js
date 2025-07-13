class Tetromino {
  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
    this.x = 3; // Starting x position
    this.y = 0; // Starting y position
    this.rotation = 0; // Initial rotation state
  }

  rotate() {
    // Implement rotation logic here
    this.rotation = (this.rotation + 1) % 4;
    // Rotate the shape array clockwise
    const rows = this.shape.length;
    const cols = this.shape[0].length;
    const rotatedShape = Array(cols).fill(null).map(() => Array(rows).fill(0));

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        rotatedShape[j][rows - 1 - i] = this.shape[i][j];
      }
    }
    this.shape = rotatedShape;
  }

  moveLeft() {
    this.x -= 1;
  }

  moveRight() {
    this.x += 1;
  }

  moveDown() {
    this.y += 1;
  }
}

export default Tetromino;