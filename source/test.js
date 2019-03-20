import test from 'tape';
import { add2 } from './index';

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
