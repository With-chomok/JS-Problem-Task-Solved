// Problem 4: Find the Maximum Number

// solved below:

function findMaxNum(arr) {
  let maxNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}
const array = [5, 1, 9, 3];
console.log(findMaxNum(array));

// function findMaxNumUsingMath(arr) {
//     return Math.max(...arr)
// }
// const array2 = [5, 1, 9, 3];
// console.log(findMaxNumUsingMath(array2));
