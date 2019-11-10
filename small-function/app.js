// isPrime - Returns true or false, indicating whether the given number is prime.
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}

// factorial - Returns a number that is the factorial of the given number.
function factorial(number) {
  let result = 1;
  if (number < 1) {
    return result;
  }
  for (let index = 1; index <= number; index += 1) {
    result *= index;
  }
  return result;
}

// fib - Returns the nth Fibonacci number.
function fib(number) {
  const tempStor = [0, 1];
  for (let index = 2; index <= number; index += 1) {
    const res = tempStor[index - 1] + tempStor[index - 2];
    tempStor.push(res);
  }
  return tempStor[number];
}

// isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
function isSorted(arr) {
  let res = true;
  for (let index = 0; index < arr.length - 1; index += 1) {
    if (arr[index] > arr[index + 1]) {
      res = false;
      return res;
    }
  }
  return res;
}

// reverse - Reverses the given string (yes, using the built in reverse function is cheating).
function reverse(str) {
  let revString = '';
  for (let index = str.length - 1; index >= 0; index -= 1) {
    revString += str[index];
  }
  return revString;
}

// indexOf - Implement the indexOf function for arrays.
function indexOf(array, item) {
  let indexItem = -1;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === item) {
      indexItem = index;
      return indexItem;
    }
  }
  return indexItem;
}

// isPalindrome - Return true or false indicating whether the given string is
// a plaindrone (case and space insensitive).
function isPalindrome(str) {
  let prepStr = str.toLowerCase();
  prepStr = prepStr.replace(/\s/g, '');
  let index = 0;
  let res = true;
  while (index < prepStr.length - index - 1) {
    if (prepStr[index] !== prepStr[prepStr.length - index - 1]) {
      res = false;
    }
    index += 1;
  }
  return res;
}

// missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through
// some number n, and returns the missing number in the sequence (there are either no missing
// numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever
// formula you can use.
function missing(array) {
  let missingNumb;
  let index = 1;
  while (index <= array.length) {
    if (indexOf(array, index) === -1) {
      missingNumb = index;
      return missingNumb;
    }
    index += 1;
  }
  return missingNumb;
}

// isBalanced - Takes a string and returns true or false indicating whether its curly braces
// are balanced.
function isBalanced(str) {
  const prepStr = str.replace(/[^{}]/g, '');
  if (prepStr.length % 2 !== 0) {
    return false;
  }
  let index = 0;
  while (index < prepStr.length - index - 1) {
    if (prepStr[index] !== '{' && prepStr[prepStr.length - index - 1] !== '}') {
      return false;
    }
    index += 1;
  }
  return true;
}

module.exports = {
  isPrime,
  factorial,
  fib,
  isSorted,
  reverse,
  indexOf,
  isPalindrome,
  missing,
  isBalanced,
};
