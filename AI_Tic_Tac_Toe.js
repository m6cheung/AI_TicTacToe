const aiTicTacToe = () => {
  let grid = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
  let xTurn = true;
  let xChoices = [];
  let oChoices = [];
  let oWin, xWin = false;

  let col = Math.floor(Math.random() * 3);
  let row = Math.floor(Math.random() * 3);

  for(let i = 0; i < 9; i++) {
    while(grid[col][row] !== ' ') {
      col = Math.floor(Math.random() * 3);
      row = Math.floor(Math.random() * 3);
    }

    if(xTurn) {
      grid[col][row] = "X";
      if(checkWin(grid)) {
        xWin = true;
        break;
      }
    } else {
      grid[col][row] = "O";
      checkWin(grid);
      if(checkWin(grid)) {
        oWin = true;
        break;
      }
    }
    xTurn = !xTurn; 
  }

  function checkWin(grid) {
    if(grid[0][0] === grid[0][1] && grid[0][1] === grid[0][2] && grid[0][0] !== ' ' && grid[0][1] !== ' ' && grid[0][2] !== ' ') return true; //top horizontal
    if(grid[1][0] === grid[1][1] && grid[1][1] === grid[1][2] && grid[1][0] !== ' ' && grid[1][1] !== ' ' && grid[1][2] !== ' ') return true; //mid horizontal
    if(grid[2][0] === grid[2][1] && grid[2][1] === grid[2][2] && grid[2][0] !== ' ' && grid[2][1] !== ' ' && grid[2][2] !== ' ') return true; //bot horizontal

    if(grid[0][0] === grid[1][0] && grid[1][0] === grid[2][0] && grid[0][0] !== ' ' && grid[1][0] !== ' ' && grid[2][0] !== ' ') return true; //left vertical
    if(grid[0][1] === grid[1][1] && grid[1][1] === grid[2][1] && grid[0][1] !== ' ' && grid[1][1] !== ' ' && grid[2][1] !== ' ') return true; //mid vertical
    if(grid[0][2] === grid[1][2] && grid[1][2] === grid[2][2] && grid[0][2] !== ' ' && grid[1][2] !== ' ' && grid[2][2] !== ' ') return true; //right vertical

    if(grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0] && grid[0][2] !== ' ' && grid[1][1] !== ' ' && grid[2][0] !== ' ') return true; //right diagonal
    if(grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2] && grid[0][0] !== ' ' && grid[1][1] !== ' ' && grid[2][2] !== ' ') return true; //left diagonal 

    return false;
  }

  if(xWin) {
    return grid.join('\n') + "\n\nAI X WINS";
  } else if(oWin) {
    return grid.join('\n') + "\n\nAI O WINS";
  } else {
    return grid.join('\n') + "\n\nTIE GAME";
  }

}