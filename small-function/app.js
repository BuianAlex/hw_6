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

function indexOf(array, element) {
  let posElement = -1;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === element) {
      posElement = index;
      return posElement;
    }
  }
  return posElement;
}

module.exports = {
  isPrime,
  factorial,
  fib,
  isSorted,
  reverse,
  indexOf,
};
