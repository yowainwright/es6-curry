import curry from './curry';

export const add2 = (a) => (b) => a + b;

export const add3 = curry((a, b, c) => a + b + c);
