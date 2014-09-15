/*
  validates a given value against a set of enum values
*/
'use strict';

module.exports = function stringToNumber(numberString) {

  var n = parseFloat(numberString);

  if (typeof n !== 'number' || n !== n) {
    throw new TypeError('Invalid number(' + numberString + ') specified');
  }

  return n;
};
