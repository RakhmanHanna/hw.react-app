'use strict';
//1
const marks = [50, 20, 70, 60, 45, 30];

function findMin(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let min = arr[0];
  arr.forEach((number) => {
    if (number < min) {
      min = number;
    }
  });
  return min;
}

console.log(findMin(marks));
