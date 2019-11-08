/* eslint-disable no-undef */
const assert = require('assert');
const fun = require('./app');

describe('function isPrime', () => {
  describe('test 0', () => {
    it('should return fasle', () => {
      assert.equal(fun.isPrime(0), false);
    });
  });
  describe('test 1', () => {
    it('should return fasle', () => {
      assert.equal(fun.isPrime(1), false);
    });
  });
  describe('test 17', () => {
    it('should return true', () => {
      assert.equal(fun.isPrime(17), true);
    });
  });
  describe('test 10000000000000', () => {
    it('should return fasle', () => {
      assert.equal(fun.isPrime(10000000000000), false);
    });
  });
});

describe('function factorial', () => {
  describe('test 0', () => {
    it('should return 1', () => {
      assert.equal(fun.factorial(0), 1);
    });
  });
  describe('test 1', () => {
    it('should return 1', () => {
      assert.equal(fun.factorial(1), 1);
    });
  });
  // eslint-disable-next-line no-undef
  describe('test 6', () => {
    it('should return 720', () => {
      assert.equal(fun.factorial(6), 720);
    });
  });
});

describe('Fibonacci', () => {
  describe('test 0', () => {
    it('should return 0', () => {
      assert.equal(fun.fib(0), 0);
    });
  });
  describe('test 1', () => {
    it('should return 1', () => {
      assert.equal(fun.fib(1), 1);
    });
  });
  describe('test 10', () => {
    it('should return 55', () => {
      assert.equal(fun.fib(10), 55);
    });
  });
  describe('test 20', () => {
    it('should return 6765', () => {
      assert.equal(fun.fib(20), 6765);
    });
  });
});
