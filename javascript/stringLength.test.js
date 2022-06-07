const stringLength = require('./stringLength.js');

test('Return the correct string Length', () => {
  expect(stringLength('abc')).toBe(3)
  expect(stringLength('')).toBe('String is either big than 10 or smaller than 1');
  expect(stringLength('asdfhjktiuqwehj')).toBe('String is either big than 10 or smaller than 1');
  
});