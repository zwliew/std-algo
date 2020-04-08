import { gcd, lcm } from './numeric';

test('gcd returns the correct value', () => {
  const CASES: number[][] = [
    [4, 5, 1],
    [3, 2, 1],
    [4, 3, 1],
    [8, 2, 2],
    [3, 5, 1],
    [5, 3, 1],
    [15, 5, 5],
    [15, 3, 3],
    [6, 3, 3],
    [20, 5, 5],
  ];
  for (let [a, b, expected] of CASES) {
    expect(gcd(a, b)).toEqual(expected);
  }
});

test('lcm returns the correct value', () => {
  const CASES: number[][] = [
    [4, 5, 20],
    [3, 2, 6],
    [4, 3, 12],
    [8, 2, 8],
    [3, 5, 15],
    [5, 3, 15],
  ];
  for (let [a, b, expected] of CASES) {
    expect(lcm(a, b)).toEqual(expected);
  }
});
