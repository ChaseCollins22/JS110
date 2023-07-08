/* eslint-disable max-len */
let readline = require('readline-sync');
let EMPTY_BOARD_SPACE = ' ';
let USER_CHARACTER = 'X';
let COMPUTER_CHARACTER = 'O';
let BOARD_ROWS = 3;
let BOARD_COLUMNS = 3;

function displayBoard(board) {
  console.log('');
  console.log('     |     |');
  console.log(`  ${board[0][0]}  |  ${board[0][1]}  |  ${board[0][2]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board[1][0]}  |  ${board[1][1]}  |  ${board[1][2]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board[2][0]}  |  ${board[2][1]}  |  ${board[2][2]}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let emptyBoard = [[], [], []];

  for (let row = 0; row < BOARD_ROWS; row += 1) {
    for (let col = 0; col < BOARD_COLUMNS; col += 1) {
      emptyBoard[row][col] = EMPTY_BOARD_SPACE;
    }
  }

  return emptyBoard;
}

function getUserRow() {
  let row = readline.question('Enter the desired square row number (1 - 3): ');

  return row;
}

function getUserCol() {
  let col = readline.question('Enter the desired square column number (1 - 3): ');

  return col;
}

function isNumber(userInput) {
  return !Number.isNaN(Number(userInput)) && (userInput >= 1 && userInput <= 3);
}

function validateInput(row, col) {
  while (!isNumber(row) || !isNumber(col)) {
    console.log('\nPlease enter valid input.');
    row = getUserRow();
    col = getUserCol();
    console.log();
  }

  return [Number(row) - 1, Number(col) - 1];
}

function updateBoard(newSquareCoordinates, board, character) {
  let row = newSquareCoordinates[0];
  let col = newSquareCoordinates[1];

  board[row][col] = character;

  return board;
}

function isSpaceEmpty(square, board) {
  let row = square[0];
  let col = square[1];

  return board[row][col] === EMPTY_BOARD_SPACE;
}

function getComputerSquare() {
  let row = Math.floor(Math.random() * BOARD_ROWS);
  let col = Math.floor(Math.random() * BOARD_COLUMNS);

  return [row, col];
}

// Display the initial empty 3x3 board.
// Ask the user to mark a square.
//  - IMPORT packages to get user input
//  - PROMPT the user to mark a square
//    - What to ask? How to format their answer?
//      - Enter the desired square row number (1 - 3)
//      - Enter the desired square column number (1 - 3)
//    - Validate user input
//      - IF the input is:
//        1) Not a number
//        2) Not a number betweeen 1 and 3 inclusive
//        THEN, ask the user to enter valid input in the correct format
//     - Mark the board with valid user input
//       - GET the current board state
//       - GET the valid user input (row , col)
//       - GET the player's character 'X' or 'O'
//       - MARK the board at position row, col from user input
// Computer marks a square.
//  - GENERATE TWO random numbers between 0 and 2 (inclusive) to represent the computer's row, col position.
//  - MARK the board with the computer's coordinates
//    - What if the board position has already been played?
//      - Validate that the position is open
//        - IF the character at the desired position is NOT an empty space, THEN get a different row, col combination
// Display the updated board state.
// If it's a winning board, display the winner.
//  - Check for three in a row
//    - Diagonal
//      - bottom left to top right => [2][0] && [1][1] && [0][2]
//      - bottom right to top left => [2][2] && [1][1] && [0][0]
//    - Horizontal
//      - top row => [0][0] && [0][1] && [0][2]
//      - bottom row => [2][0] && [2][1] && [2][2]
//    - Vertical
//      - first column => [0][0] && [1][0] && [2][0]
//      - second column => [0][1] && [1][1] && [2][1]
//      - third column => [0][2] && [1][2] && [2][2]
// If the board is full, display tie.
// If neither player won and the board is not full, go to #2
// Play again?
// If yes, go to #1
// Goodbye!

// GET WINNER
//  - compartementalize functions (Each function performs only one action)
//  - How to get winner?
//    -

// ALTERNATIVE WIN FUNCTIONS:
//  - CREATE an array of winning combo arrays
//  - IF any subarray has EVERY element the same, then return true



function diagonalWin(board) {
  let bottomLeftToTopRight = [board[2][0], board[1][1], board[0][2]];
  let bottomRightToTopLeft = [board[2][2], board[1][1], board[0][0]];

  return (bottomLeftToTopRight.every((space) => space === USER_CHARACTER) ||
          bottomRightToTopLeft.every((space) => space === USER_CHARACTER) ||
          bottomLeftToTopRight.every((space) => space === COMPUTER_CHARACTER) ||
          bottomRightToTopLeft.every((space) => space === COMPUTER_CHARACTER));
}

function horizontalWin(board) {
  for (let row = 0; row < BOARD_ROWS; row += 1) {
    if (board[row].every((square) => square === USER_CHARACTER) ||
        board[row].every((square) => square === COMPUTER_CHARACTER)) {
      return true;
    }
  }
  return false;
}

function verticalWin(board) {
  let column = 0;

  while (column < 3) {
    if (board.every((row) => row[column] === USER_CHARACTER) ||
        board.every((row) => row[column] === COMPUTER_CHARACTER)) {
      return true;
    }
    column += 1;
  }

  return false;
}

function isWinner(board) {
  return (diagonalWin(board) ||
          horizontalWin(board) ||
          verticalWin(board));
}


function isBoardFull(board) {
  for (let row = 0; row < BOARD_ROWS; row += 1) {
    for (let col = 0; col < BOARD_COLUMNS; col += 1) {
      if (board[row][col] === EMPTY_BOARD_SPACE) {
        return false;
      }
    }
  }
  return true;
}


let playAgain = true;

let testWins = [['X', 'O', 'X'], ['O', 'X', 'O'], ['O', 'O', 'X']];

while (playAgain) {
  console.clear();
  let board = initializeBoard();
  displayBoard(board);

  while (!isWinner(board) && !isBoardFull(board)) {
    let row = getUserRow();
    let col = getUserCol();
    let userSquare = validateInput(row, col);
    let computerSquare = getComputerSquare();
    console.clear();

    if (isSpaceEmpty(userSquare, board)) {
      updateBoard(userSquare, board, USER_CHARACTER);
      // displayBoard(board);
    } else {
      console.log('\nThat space is taken. Enter a new space:\n');
      continue;
    }

    if (isSpaceEmpty(computerSquare, board)) {
      updateBoard(computerSquare, board, COMPUTER_CHARACTER);
      displayBoard(board);
    } else {
      let newComputerSquare = getComputerSquare();
      if (isBoardFull(board)) break;

      while (!isSpaceEmpty(newComputerSquare, board)) {
        newComputerSquare = getComputerSquare();
      }

      updateBoard(newComputerSquare, board, COMPUTER_CHARACTER);
      displayBoard(board);
    }
  }

  // TODO: Display Winner/Tie
  if (isBoardFull(board)) {
    console.log("It's a tie!");
  } else if (isWinner(board)) {
    console.log('WINNER!');
  }

  playAgain = readline.question('Do you want to play again? y/n ').trim();

  while (playAgain !== 'y' && playAgain !== 'n') {
    console.log('Please enter valid input');
    playAgain = readline.question('Do you want to play again? y/n ').trim();
  }
}
