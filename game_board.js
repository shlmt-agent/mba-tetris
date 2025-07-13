class GameBoard {
  constructor() {
    this.board = this.initializeBoard();
    this.rows = 20;
    this.cols = 10;
  }

  initializeBoard() {
    const board = [];
    for (let i = 0; i < this.rows; i++) {
      board.push(new Array(this.cols).fill(0));
    }
    return board;
  }

  isCellOccupied(row, col) {
    if (row < 0 || row >= this.rows || col < 0 || col >= this.cols) {
      return true; // Consider out-of-bounds as occupied
    }
    return this.board[row][col] !== 0;
  }

  placeTetromino(tetromino) {
    const shape = tetromino.shape;
    const color = tetromino.color;
    const x = tetromino.x;
    const y = tetromino.y;

    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col]) {
          this.board[y + row][x + col] = color;
        }
      }
    }
  }
}

export default GameBoard;