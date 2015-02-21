(function() {
  var player1 = {name: 'cross'};
  var player2 = {name: 'circle'};
  var WINNERS = ['012','345','678','036','147','258','048','246']
  var currentPlayer = player1;
  var winner;

  var game = document.getElementById('game');
  game.addEventListener('click', function(e) {
    e.target.className += ' ' + currentPlayer.name;
    switchPlayers();
    if (checkGameOver()) {
      alert("Winner is " + winner);
    }  
  });

  var switchPlayers = function() {
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  }

  var getIds = function(elem) {
    return parseInt(elem.id);
  }

  var checkWinner = function(name) {
    var matchCells = document.getElementsByClassName(name);

    if (matchCells.length < 3) {
      return false
    }

    var matchIds = Array.prototype.map.call(matchCells,getIds);

    matchIds = matchIds.filter(function(n) { return n !== undefined })
    matchIds.sort(function(a,b) {
      if (a < b) {
        return -1;
      } 
      if (a > b) {
        return 1;
      }
      return 0;
    });

    var winner_combo;
    for(i=0; i< matchIds.length - 2; i++) {
      winner_combo = matchIds.slice(i,[i+3]).join('');
      for(j=0;j<WINNERS.length;j++) {
        if (WINNERS[j] === winner_combo) { 
          return true;
        }
      } 
    }
    return false;
  }

  var checkGameOver = function() {
    if (checkWinner(player1.name)) {
      winner = player1.name;
      return true;
    }
    if (checkWinner(player2.name)) {
      winner = player2.name;
      return true;
    } 
    return false; 
  }
//Board
//Game
//Players
//Winner
//New Game
//Timer

}) ();


