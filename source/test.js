import test from 'tape';
import { add2, add3, inc, compose, compose2, pipe, trace } from './index';

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

test('function composition', assert => {
  const msg = '';
  const g = n => n + 1;
  const f = n => n * 2;
  const h = compose2(f, g);
  const actual = h(20);
  const expected = 42;
  assert.same(actual, expected, msg);
  assert.end();
});

test('function composition', assert => {
  const msg = '';
  const actual = trace('foo')('bar');
  const expected = 'bar';
  assert.same(actual, expected, msg);
  assert.end();
});

test('compose fns', assert => {
  const msg = 'should take any number of functions and return their composition';
  const g = n => n + 1;
  const f = n => n * 2;
  const h = compose(trace('after f'), f, trace('after g'), g);
  const actual = h(20);
  const expected = 42;
  assert.same(actual, expected, msg);
  assert.end();
});

test('pip fns', assert => {
  const msg = 'should take any number of functions and return their composition';
  const g = n => n + 1;
  const f = n => n * 2;
  const h = pipe(trace('after f'), f, trace('after g'), g);
  const actual = h(20);
  const expected = 41;
  assert.same(actual, expected, msg);
  assert.end();
});
