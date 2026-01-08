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
// console.log(removeDuplicates(arrayWithDuplicates));

// Problem 6: Sum of All Numbers in an Array
// solved below:

function sumOfArr (arr) {
    let sum = 0;
    for (let nums of arr){
        console.log(nums);
        sum += nums;
    }
    return sum;
}

const arrayToSum = [1, 2, 3, 4];
console.log("Total Num:",sumOfArr(arrayToSum));



