/* eslint-disable no-undef */
const assert = require('assert');
const fun = require('./app');

describe('function isPrime', () => {
  describe('test number 0', () => {
    it('should return fasle', () => {
      assert.equal(fun.isPrime(0), false);
    });
  });
  describe('test number 1', () => {
    it('should return fasle', () => {
      assert.equal(fun.isPrime(1), false);
    });
  });
  describe('test number 17', () => {
    it('should return true', () => {
      assert.equal(fun.isPrime(17), true);
    });
  });
  describe('test number 10000000000000', () => {
    it('should return fasle', () => {
      assert.equal(fun.isPrime(10000000000000), false);
    });
  });
});

describe('function factorial', () => {
  describe('test number 0', () => {
    it('should return 1', () => {
      assert.equal(fun.factorial(0), 1);
    });
  });
  describe('test number 1', () => {
    it('should return 1', () => {
      assert.equal(fun.factorial(1), 1);
    });
  });
  describe('test number 6', () => {
    it('should return 720', () => {
      assert.equal(fun.factorial(6), 720);
    });
  });
});

describe('function Fibonacci', () => {
  describe('test number 0', () => {
    it('should return 0', () => {
      assert.equal(fun.fib(0), 0);
    });
  });
  describe('test number 1', () => {
    it('should return 1', () => {
      assert.equal(fun.fib(1), 1);
    });
  });
  describe('test number 10', () => {
    it('should return 55', () => {
      assert.equal(fun.fib(10), 55);
    });
  });
  describe('test number 20', () => {
    it('should return 6765', () => {
      assert.equal(fun.fib(20), 6765);
    });
  });
});

describe('function isSorted', () => {
  describe('test array []', () => {
    it('should return true', () => {
      assert.equal(fun.isSorted([]), true);
    });
  });
  describe('test array [-Infinity, -5, 0, 3, 9]', () => {
    it('should return true', () => {
      assert.equal(fun.isSorted([-Infinity, -5, 0, 3, 9]), true);
    });
  });
  describe('test array [3, 9, -3, 10]', () => {
    it('should return false', () => {
      assert.equal(fun.isSorted([3, 9, -3, 10]), false);
    });
  });
  describe('test array [3, 9, 9, 10]', () => {
    it('should return true', () => {
      assert.equal(fun.isSorted([3, 9, 9, 10]), true);
    });
  });
  describe('test array [3, 9, 9, -10]', () => {
    it('should return true', () => {
      assert.equal(fun.isSorted([3, 9, 9, -10]), false);
    });
  });
});

describe('function reverse', () => {
  describe('test string  " "', () => {
    it('should return ""', () => {
      assert.equal(fun.reverse(''), '');
    });
  });
  describe('test string abcdef', () => {
    it('should return fedcba', () => {
      assert.equal(fun.reverse('abcdef'), 'fedcba');
    });
  });
});

describe('function custom indexOf', () => {
  describe('test array [1, 2, 3] indexOf 1', () => {
    it('should return 0', () => {
      assert.equal(fun.indexOf([1, 2, 3], 1), 0);
    });
  });
  describe('test array [1, 2, 3] indexOf 4', () => {
    it('should return -1', () => {
      assert.equal(fun.indexOf([1, 2, 3], 4), -1);
    });
  });
});
