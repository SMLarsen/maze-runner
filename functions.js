/*jshint esversion: 6 */
function Game(board) {
  this.board = board;
  this.leaps = 0;
  this.play = function() {
    console.log(this.leaps);
    return this.leaps;
  };
}

// Game.prototype.play = function() {
// };

const board = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1]
];

game = new Game(board);

game.play();

/*
board = [[1,1,0,0,0],
         [1,1,0,0,0],
         [0,0,0,0,0],
         [0,0,0,1,1],
         [0,0,0,1,1]];
game = new Game(board);
Test.expect(game.play()==2, "Should return '2'");

board = [[1,0,1,0,1],
         [1,0,1,0,1],
         [1,1,1,0,0],
         [0,0,0,1,1],
         [0,0,0,1,1]];
game = new Game(board);
Test.expect(game.play()==3, "Should return '3'");

board = [[1,0,1,0,1],
         [0,1,0,1,0],
         [1,0,1,0,1],
         [0,1,0,1,0],
         [1,0,1,0,1]];
game = new Game(board);
Test.expect(game.play()==13, "Should return '13'");

board = [[1,0,0,0,0],
         [0,0,1,1,0],
         [1,0,1,0,1],
         [1,1,1,1,0],
         [1,1,1,0,1]];
game = new Game(board);
Test.expect(game.play()==4, "Should return '4'");
*/
