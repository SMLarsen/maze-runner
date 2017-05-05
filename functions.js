/*jshint esversion: 6 */
function mazeRunner(maze, directions) {

  let begCell = findCell(2);
  let endCell = findCell(3);
  let curCell = begCell;

  function findCell(target) {
    for (let i = 0; i < maze.length; i++) {
      if (maze[i].indexOf(target) !== -1) {
        let start = {
          row: i,
          col: maze[i].indexOf(target)
        };
        return start;
      }
    }
  }

  console.log('begCell:', begCell);
  console.log('endCell:', endCell);

  for (let i = 0; i < directions.length; i++) {
    switch (directions[i]) {
      case 'N':
        curCell.row -= 1;
        break;
      case 'W':
        curCell.col -= 1;
        break;
      case 'S':
        curCell.row += 1;
        break;
      case 'E':
        curCell.col += 1;
        break;
      default:
        return "Error - invalid move";
    }
    console.log('move:', directions[i], 'curCell:', curCell, 'maze[curCell.row][curCell.col]:', maze[curCell.row][curCell.col]);
    console.log(maze[curCell.row][curCell.col] == 1);
    if (maze[curCell.row][curCell.col] == 1) {
      console.log('Dead');
      return "Dead";
    } else if (i === directions.length - 1) {
      if (maze[curCell.row][curCell.col] == 3) {
        console.log('Finish');
        return "Finish";
      } else {
        console.log('Lost');
        return "Lost";
      }
    }
  }

}

var maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1]
];

mazeRunner(maze, ["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]);

/*
Test.expect(mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"])=="Finish", "Expected Finish");
Test.expect(mazeRunner(maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"])=="Finish", "Expected Finish");
Test.expect(mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E","W","W"])=="Finish", "Expected Finish");

Test.expect(mazeRunner(maze,["N","N","N","W","W"])=="Dead", "Expected Dead");
Test.expect(mazeRunner(maze,["N","N","N","N","N","E","E","S","S","S","S","S","S"])=="Dead", "Expected Dead");

Test.expect(mazeRunner(maze,["N","E","E","E","E"])=="Lost", "Expected Lost");


*/
