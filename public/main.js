(function() {
  var player1 = {name: 'cross'};
  var player2 = {name: 'circle'};
  var currentPlayer = player1;

  var game = document.getElementById('game');
  game.addEventListener('click', function(e) {
    e.target.className += ' ' + currentPlayer.name;
    switchPlayers();
    checkGameOver();
  });

  var switchPlayers = function() {
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  }

  var checkGameOver = function() {
    var crossCells = document.getElementsByClassName('cross');
    var circleCells = document.getElementsByClassName('circle');
    checkCircleCells();
    checkCrossCells();
  }

}) ();


