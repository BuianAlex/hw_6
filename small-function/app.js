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
  const result = 1;

  return result;
}
module.exports = { isPrime, factorial, fib };
