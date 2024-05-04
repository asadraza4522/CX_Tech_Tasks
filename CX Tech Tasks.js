// Q#1: Write a function that will take an array as input, sort, and return the array in descending
// order. For example, if the array is [3,2,7,4,6,9] the result should be [9,7,6,4,3,2].

// Solution:

function sortDescending(arr) {
  // Implementing bubble sort algorithm
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // Swap if the current element is less than the next element
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Example usage:
const array1 = [3, 2, 7, 4, 6, 9];
console.log("Answer # 1");
console.log("The Sorted Array:", sortDescending(array1));

// Q#2: Write a function that will take a string as input, check and return if it is palindrome or
// not. For example, if the string is “madam” the function should return true and if the string
// is “doctor” it should return false.

// Solution :

function isPalindrome(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return str === reversedString;
}
// Test cases
console.log("Answer # 2");
const str1 = "madam",
  str2 = "doctor",
  str3 = "12321";
console.log(`${str1} is palindrome :`, isPalindrome(str1));
console.log(`${str2} is palindrome :`, isPalindrome(str2));
console.log(`${str3} is palindrome :`, isPalindrome(str3));

// Q#3: Write a function that will take an array as input and return the sum of the two largest
// numbers in a n array. For example, in the array [3,7,1,5,11,19] the result would be 30
// because 11 and 19 are the largest numbers.

// Solution:

function sumOfTwoLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  // Find the largest and second largest numbers
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  // Return the sum of the largest and second largest numbers
  return { sum: largest + secondLargest, largest, secondLargest };
}

// Example usage:
console.log("Answer # 3");
const array2 = [3, 7, 1, 5, 11, 19, 4, 32, 64];
const { sum, largest, secondLargest } = sumOfTwoLargest(array2);
console.log(
  "Sum of the two largest numbers: %s And 1st largest number: %s , and Second Largest Number: %s",
  sum,
  largest,
  secondLargest
);

// Q#4: Write a function that will take an array as input and return an array with every missing
// element from 0 to the highest entry. For example, in an array [3,4,9,1,7,3,2,6] the highest
// entry is 9, and missing numbers are [0,5,8]?

// Solution:

function findMissingNumbers(arr) {
  // Find the highest entry in the array
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  // Create an array from 0 to the highest entry
  const fullArray = [];
  for (let i = 0; i <= max; i++) {
    fullArray.push(i);
  }
  // Filter out values present in the input array
  const missingNumbers = [];
  for (let i = 0; i < fullArray.length; i++) {
    let found = false;
    for (let j = 0; j < arr.length; j++) {
      if (fullArray[i] === arr[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      missingNumbers.push(fullArray[i]);
    }
  }
  return missingNumbers;
}

// Example usage
console.log("Answer # 4");
const array3 = [3, 4, 9, 1, 7, 3, 2, 6];
const missingNumbers = findMissingNumbers(array3);
console.log("The Missing Numbers are :", missingNumbers);

// Q#5: Write a function that will take an array of numbers and return the number most repeated
// in the array with how many times it was repeated. For example, if the array is
// [4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5] the function should return 4 is repeated 5 times.

// Solution:

function findMostRepeatedNumber(arr) {
  let counts = {};
  // Count occurrences of each number
  arr.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });
  let mostRepeatedNumber;
  let maxCount = 0;
  // Find the number with the highest count
  for (let num in counts) {
    if (counts[num] > maxCount) {
      mostRepeatedNumber = num;
      maxCount = counts[num];
    }
  }
  return {
    number: mostRepeatedNumber,
    count: maxCount,
  };
}
// Example usage
console.log("Answer # 5");
let inputArray = [4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5];
let result = findMostRepeatedNumber(inputArray);
console.log(
  "Most repeated number:",
  result.number,
  "and Number of occurrences:",
  result.count
);

// Q#6: Write a function that will take an array as input, it will rotate the array to the right 1 time
// and return the rotated array. Rotation of the array means that each element is shifted right
// by one index. For example, the rotation of array A = [3,8,9,7,6] is [6,3,8,9,7]

// Solution:

function rotateArrayRightOnce(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const rotatedArray = [];
  // Store the last value
  const lastValue = arr[arr.length - 1];
  // Shift values to the right
  for (let i = 0; i < arr.length - 1; i++) {
    rotatedArray[i + 1] = arr[i];
  }
  // Place the last value at the beginning
  rotatedArray[0] = lastValue;
  return rotatedArray;
}

// Example usage:
console.log("Answer # 6");
const originalArray = [3, 8, 9, 7, 6, 20, 34, 23, 12, 30, 12];
const rotatedArray = rotateArrayRightOnce(originalArray);
console.log("The Rotated Array : ", rotatedArray);
