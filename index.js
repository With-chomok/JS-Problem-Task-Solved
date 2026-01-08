// Problem 1: Reverse a String

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

// Problem 2: Count Vowels in a String
function countVowels(str) {
  let count = 0;
  let vowels = "AEIOU";

  for (let char of str.toUpperCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("programming"));

// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// solved below:

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
const madam = isPalindrome("madam");
const hello = isPalindrome("hello");
console.log(madam);
console.log(hello);

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
console.log(
  "Removes All Duplicate Numbers:",
  removeDuplicates(arrayWithDuplicates)
);

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

// Problem 8: Capitalize First Letter of Each Word

function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const sampleString = "hello world";
console.log("Capitalized String: ", capitalizeFirstLetter(sampleString));

// Problem 9: Find the Factorial of a Number

function facttorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
const numforFactorial = 5;
console.log("Factorial is: ", facttorial(numforFactorial));

// Problem 10: PingPong Challenge

function pingPong(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("pong");
    } else {
      console.log(i);
    }
  }
  return n;
}
const pingPongResult = pingPong(20);
console.log("PingPong Result: ", pingPongResult);
