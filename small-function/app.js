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
module.exports = { isPrime, factorial, fib };
