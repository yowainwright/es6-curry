import test from 'tape';
import { add2, add3, inc } from './index';

// test('No tests yet!', assert => {
//   const msg = 'should have tests';

//   const actual = false;
//   const expected = true;

//   assert.same(actual, expected, msg);
//   assert.end();
// });

test('add2(a) => b => Number', assert => {
  const msg = 'should take 2 numbers and return the sum';

  const actual = add2(1)(2);
  const expected = 3;
  assert.same(actual, expected, msg);
  assert.end();
});

test('add3', assert => {
  const msg = 'should add 3 and return the sum';
  const expected = 6;

  assert.same(add3(1, 2, 3), expected, msg);
  assert.same(add3(1)(2)(3), expected, msg);
  assert.same(add3(1, 2)(3), expected, msg);
  assert.same(add3(1)(2, 3), expected, msg);
  assert.end();
});

test('inc', assert => {
  const msg = 'should take a number and return the sum of number and 1';
  const actual = inc(4);
  const expected = 5;

  assert.same(actual, expected, msg);
  assert.end();
});
