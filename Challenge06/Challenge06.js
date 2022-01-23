"use strict";

// 1) ---------------------
//
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//
// ------------------------

const findMax = (arr) => {
  let max = 0;
  // write your code here

  // A. Using simple for loop
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  // B. using forEach higher order array method
  // arr.forEach((entry) => {
  //   if (entry > max) return (max = entry);
  // });

  return max;
};

// 2) ---------------------
//
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the array (there could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//
// ------------------------

const sumNums = (arr) => {
  let sum = 0;
  // write your code here

  // A. Using for loop
  // for (let i = 0; i < arr.length; i++) {
  //   if (typeof arr[i] === "number") {
  //     sum += arr[i];
  //   }
  // }

  // B. Using reduce high order array method
  arr.reduce((acc, entry) => {
    if (typeof entry === "number") acc += entry;
    return (sum = acc);
  }, 0);

  return sum;
};

// 3) ---------------------
//
//  using the (reverseArray) function; return provided array reversed
//  without using build-in functions
//  EX:
//  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
//
// ------------------------
const reverseArray = (arr) => {
  // write your code here
  const reversedArr = [];
  // A. Using arr.push
  // for (let i = arr.length - 1; i >= 0; i--) {
  //   reversedArr.push(arr[i]);
  // }

  // B. Using arr.unshift
  for (let i = 0; i < arr.length; i++) {
    reversedArr.unshift(arr[i]);
  }
  return reversedArr;
};

module.exports = { findMax, sumNums, reverseArray };
