class GameBoard {
  constructor() {
    this.board = this.initializeBoard();
  }

  initializeBoard() {
    const board = [];
    for (let row = 0; row < 20; row++) {
      board[row] = [];
      for (let col = 0; col < 10; col++) {
        board[row][col] = 0;
      }
    }
    return board;
  }

  isCellOccupied(row, col) {
    if (row < 0 || row >= 20 || col < 0 || col >= 10) {
      return true; // Treat out-of-bounds as occupied
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