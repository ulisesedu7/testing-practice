const capitalize = require('./capitalize.js');

test('Correctly return a string with the first letter capitalize', () => {
  expect(capitalize('ulises')).toBe('Ulises');
});