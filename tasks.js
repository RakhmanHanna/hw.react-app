'use strict';
//1 find min, find max
const marks = [50, 20, 70, 60, 45, 30];

function findMin(arr) {
  let min = arr[0];
  arr.forEach((number) => {
    if (number < min) {
      min = number;
    }
  });
  return min;
}

console.log(findMin(marks));

function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax(marks));
