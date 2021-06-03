"use strict";

var map = ["WWWWWWWWWWWWWWWWWWWWW", "W   W     W     W   W", "W W W WWW WWWWW W WWW", "W W W  W      W W   W", "W WWWWWWW W WWW W W W", "W         W     W W W", "W WWW WWWWW WWWWW W W", "W W   W   W W     W W", "W WWWWW W W W WWW W F", "S     W W W W W W WWW", "WWWWW W W W W W W W W", "W     W W W   W W W W", "W WWWWWWW WWWWW W W W", "W       W       W   W", "WWWWWWWWWWWWWWWWWWWWW"]; // let cell;

for (var index = 0; index < map.length; index += 1) {
  map[index] = map[index].split(""); // console.log(cell)
}

var player = {
  colIndex: 0,
  rowIndex: 9
};
var maze = document.getElementById('maze');

function renderMaze() {
  maze.innerHTML = "";

  for (var rowIndex = 0; rowIndex < map.length; rowIndex += 1) {
    var rowElement = document.createElement('div');
    rowElement.classList = 'row';
    var row = map[rowIndex]; // row = cell
    // row = row.split(",")
    // console.log(row[rowIndex])

    for (var colIndex = 0; colIndex <= row.length; colIndex += 1) {
      var _char = row[colIndex];
      var cellElement = document.createElement('div'); // cellElement.classList = 'cell'

      if (_char === 'W') {
        cellElement.classList = 'cell wall';
      } else if (_char === 'S') {
        player.rowIndex = rowIndex;
        player.colIndex = colIndex;
        cellElement.classList = 'player';
      } else {
        cellElement.classList = 'cell';
      }

      rowElement.append(cellElement);
    }

    maze.append(rowElement);
  }
}

var movePlayer = function movePlayer(newRowIndex, newColIndex) {
  if (newRowIndex < 0 || newRowIndex >= map.length || newColIndex < 0 || newColIndex >= map[0].length || map[newRowIndex][newColIndex] === "W") {
    // alert(map[newRowIndex][newColumnIndex])
    // alert(newRowIndex, newColumnIndex)
    return;
  } // 1. remove the player from current position


  map[player.rowIndex][player.colIndex] = " ";
  console.log("what the eff ".concat(map[player.rowIndex][player.colIndex]));
  console.log("moving player away from position", player.rowIndex, player.colIndex);
  map[newRowIndex][newColIndex] = "S";
  console.log("moving player to position", newRowIndex, newColIndex);
  console.log(" ok ?".concat(map[newRowIndex][newColIndex]));
  player.rowIndex = newRowIndex;
  player.colIndex = newColIndex; // alert(newRowIndex, newColumnIndex)
};

document.addEventListener('keydown', function (event) {
  console.log(event);

  switch (event.code) {
    case 'ArrowUp':
      movePlayer(player.rowIndex - 1, player.colIndex);
      break;

    case 'ArrowDown':
      movePlayer(player.rowIndex + 1, player.colIndex);
      break;

    case 'ArrowLeft':
      movePlayer(player.rowIndex, player.colIndex - 1);
      break;

    case 'ArrowRight':
      movePlayer(player.rowIndex, player.colIndex + 1);
      break;
  }

  renderMaze();
});
renderMaze();
console.log(player); //farmers are hacking their tractors
// https://www.youtube.com/watch?v=EPYy_g8NzmI
// let maze = document.getElementById('maze')
// for(let row of map) {
//   let rowElement = document.createElement('div')
//   for(let i = 0; i < row.length; i += 1) {
//     let char = row[index]
//     let cellElement = document.createElement('div')
//     if(char === 'W') {
//       cellElement.classList.add('cell wall')
//     } else if(char === 'S') {
//       cellElement.classList.add('cell player')
//     } else {
//       cellElement.classList.add('cell')
//     }
//   }
//   maze.append(row)
// }
// map[newRowIndex][newColumnIndex] === "W") 
// methods: {
//   checkBadges(badgeIndex) {
//     return this.badges.map(theBadge => {
//       if(theBadge.name === this.badges[badgeIndex].name) {
//         this.badges.showActive = !this.badges[badgeIndex].showActive
//       }
//     })
//   }
// },
// computed: {
//   badgeActive(badgeIndex) {
//     return this.badges[badgeIndex].showActive / 'active-badge-class' : null
//   }
// }