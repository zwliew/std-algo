import { count, countIf } from "./queries";

test("count returns the number of elements equal to the specified value", () => {
  const TEST_CASES = [
    {
      arr: [1, 1, 1, 1, 1, 10000],
      val: 1,
      result: 5,
    },
    {
      arr: [5, 7, 7, 8, 8, 10],
      val: 8,
      result: 2,
    },
    {
      arr: [5, 7, 7, 8, 8, 10],
      val: 6,
      result: 0,
    },
    {
      arr: [],
      val: 0,
      result: 0,
    },
    {
      arr: [2, 2],
      val: 3,
      result: 0,
    },
  ];

  for (let { arr, val, result } of TEST_CASES) {
    const cnt = count(arr, val);
    expect(cnt).toEqual(result);
  }
});

test("count returns the number of elements that satisfy the predicate", () => {
  const TEST_CASES = [
    {
      arr: [1, 1, 1, 1, 1, 10000],
      pred: (el: number) => el === 1,
      result: 5,
    },
    {
      arr: [5, 7, 7, 8, 8, 10],
      pred: (el: number) => el === 8,
      result: 2,
    },
    {
      arr: [5, 7, 7, 8, 8, 10],
      pred: (el: number) => el === 6,
      result: 0,
    },
    {
      arr: [],
      pred: (el: number) => el === 0,
      result: 0,
    },
    {
      arr: [2, 2],
      pred: (el: number) => el === 3,
      result: 0,
    },
  ];

  for (let { arr, pred, result } of TEST_CASES) {
    const cnt = countIf(arr, pred);
    expect(cnt).toEqual(result);
  }
});
