// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// solved below:

function isPalindrome(str) {
   let reversed = str.split('').reverse().join('');
   return str === reversed
}
const madam = isPalindrome("madam");
const hello = isPalindrome("hello")
console.log(madam);
console.log(hello);

