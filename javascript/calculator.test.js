const Calculator = require('./calculator.js');

describe('Calculator ', () => {
  test('adds to numbers correctly', () => {
    expect(Calculator.add(2,2)).toBe(4);
    expect(Calculator.add(3,5)).toBe(8);
    expect(Calculator.add(1,9)).toBe(10);
  });

  test('subtracts to numbers correctly', () => {
    expect(Calculator.subtract(2,2)).toBe(0);
    expect(Calculator.subtract(5,2)).toBe(3);
    expect(Calculator.subtract(2,3)).toBe(-1);
  });

  test('divide to numbers correctly', () => {
    expect(Calculator.divide(4,2)).toBe(2);
    expect(Calculator.divide(12,4)).toBe(3)
    expect(Calculator.divide(24,6)).toBe(4);;
  });

  test('multiply to numbers correctly', () => {
    expect(Calculator.multiply(1,7)).toBe(7);
    expect(Calculator.multiply(3,5)).toBe(15);
    expect(Calculator.multiply(6,5)).toBe(30);
  });
});