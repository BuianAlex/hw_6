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

function fib(number) {
  const tempStor = [0, 1];
  for (let index = 2; index <= number; index += 1) {
    const res = tempStor[index - 1] + tempStor[index - 2];
    tempStor.push(res);
  }
  return tempStor[number];
}

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

function reverse(str) {
  let revString = '';
  for (let index = str.length - 1; index >= 0; index -= 1) {
    revString += str[index];
  }
  return revString;
}

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

module.exports = {
  isPrime,
  factorial,
  fib,
  isSorted,
  reverse,
  indexOf,
  isPalindrome,
  missing,
};
