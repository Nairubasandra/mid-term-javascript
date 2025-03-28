// NO.1
// a function to reverse a given string
function reverseString(str) {
    return str.split('').reverse().join('');
  }

  
// NO.2 
// finding the sum of all even numbers in an array
let numbers = [1, 2, 3, 4, 5, 6];
let result = sumEvenNumbers(numbers);
console.log(result);  // Output: 12 (because 2 + 4 + 6 = 12)

// NO.3
function productOrSum(num1, num2) {
  if (num1 === num2) {
    return num1 * num2;  // If the numbers are the same, return their product
  } else {
    return num1 + num2;  // If the numbers are different, return their sum
  }
}

// NO.4
function isPalindrome(word) {
  let lowercasedWord = word.toLowerCase();
  let reversedWord = lowercasedWord.split('').reverse().join('')
  
  return lowercasedWord === reversedWord;
}

