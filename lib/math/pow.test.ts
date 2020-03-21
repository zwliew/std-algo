import { pow } from './pow';

test('pow returns the correct value', () => {
  const CASES: number[][] = [
    [38, 738, 97, 8],
    [3, 1237, 4, 3],
    [91, 5, 0, 6240321451],
    [81, 4, 1, 0],
  ];
  for (let [base, exp, mod, res] of CASES) {
    expect(pow(base, exp, mod)).toEqual(res);
  }
});
