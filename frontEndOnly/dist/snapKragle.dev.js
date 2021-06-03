"use strict";

var snapKragle = function snapKragle(maxValue) {
  var value = "";

  for (var num = 0; num <= maxValue; num += 1) {
    if (num % 2 == 1) {
      value += 'Snap, ';
    } else if (num % 5 == 0) {
      value += 'Kragle, ';
    } else if (num % 2 == 1 && num % 5 == 1) {
      value += 'SnapKragle';
    } else {
      value += "".concat(num, ", ");
    }

    return value;
  }
};

var result = snapKragle(20);
console.log(result);