// Problem 5: Remove Duplicates from an Array
// solved below:

function removeDuplicates(arr) {
  const uniqueArr = [];
  for (const nums of arr) {
    if (uniqueArr.includes(nums) === false) {
      uniqueArr.push(nums);
    }
  }
  return uniqueArr;
}

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4];
console.log("Removes All Duplicate Numbers:",removeDuplicates(arrayWithDuplicates));

// Problem 6: Sum of All Numbers in an Array
// solved below:

function sumOfArr(arr) {
  let sum = 0;
  for (let nums of arr) {
    sum += nums;
  }
  return sum;
}

const arrayToSum = [1, 2, 3, 4];
console.log("Total Num:", sumOfArr(arrayToSum));

// Problem 7: Find Even Numbers in an Array
// [1, 2, 3, 4, 5, 6]

function giveEvenNumbs(arr) {
  let evenNumbs = [];
  for (let numbs of arr) {
    if (numbs % 2 === 0) {
      evenNumbs.push(numbs);
    }
  }
  return evenNumbs;
}

const arrayForEvenNumbs = [1, 2, 3, 4, 5, 6];
const giveEvenNumbsResult = giveEvenNumbs(arrayForEvenNumbs);
console.log("All Even Number Are: ", giveEvenNumbsResult);
