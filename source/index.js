import curry from './curry';

export const add2 = (a) => (b) => a + b;

export const add3 = curry((a, b, c) => a + b + c);

export const inc = add2(1);

export const compose2 = (f, g) => (x) => f(g(x));

export const trace = label => value => {
  console.log(`${label}${JSON.stringify(value)}`);
  return value;
};

export const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

export const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
