const {add, multiply, divide} = require('./02-math');

test('sum 1 + 3 should be 4', ()=> {
  expect(add(1, 3)).toBe(4);
});

test('multiply 2 * 3 should be 6', ()=> {
  expect(multiply(2, 3)).toBe(6);
});

test('divide 5 * 1 should be 5', ()=> {
  expect(divide(5, 1)).toBe(5);
});

