import { lowerBound, upperBound, equalRange, binarySearch } from './search';

test('binarySearch returns the index of the first element that equals to the value', () => {
  const TEST_CASES = [
    {
      arr: [1, 1, 1, 1, 1, 10000],
      val: 1,
      result: 0,
    },
    {
      arr: [5, 7, 7, 8, 8, 10],
      val: 8,
      result: 3,
    },
    {
      arr: [5, 7, 7, 8, 8, 10],
      val: 6,
      result: 6,
    },
    {
      arr: [],
      val: 0,
      result: 0,
    },
    {
      arr: [2, 2],
      val: 3,
      result: 2,
    },
  ];

  for (let { arr, val, result } of TEST_CASES) {
    const idx = binarySearch(arr, val, (lhs, rhs) => lhs === rhs);
    expect(idx).toEqual(result);
  }
});

test('lowerBound returns the index of the first element not less than value', () => {
  const TEST_CASES = [
    {
      arr: [1, 1, 1, 1, 1, 10000],
      val: 1,
      result: 0,
    },
    {
      arr: [5, 7, 7, 8, 8, 10],
      val: 8,
      result: 3,
    },
    {
      arr: [5, 7, 7, 8, 8, 10],
      val: 6,
      result: 1,
    },
    {
      arr: [],
      val: 0,
      result: 0,
    },
    {
      arr: [2, 2],
      val: 3,
      result: 2,
    },
  ];

  for (let { arr, val, result } of TEST_CASES) {
    const idx = lowerBound(arr, val);
    expect(idx).toEqual(result);
  }
});

test('upperBound returns the index of the first element greater than value', () => {
  const TEST_CASES = [
    {
      arr: [1, 1, 1, 1, 1, 10000],
      val: 1,
      result: 5,
    },
    {
      arr: [5, 7, 7, 8, 8, 10],
      val: 8,
      result: 5,
    },
    {
      arr: [5, 7, 7, 8, 8, 10],
      val: 6,
      result: 1,
    },
    {
      arr: [],
      val: 0,
      result: 0,
    },
    {
      arr: [2, 2],
      val: 3,
      result: 2,
    },
  ];

  for (let { arr, val, result } of TEST_CASES) {
    const idx = upperBound(arr, val);
    expect(idx).toEqual(result);
  }
});

test('equalRange returns the range containing all elements equal to the value', () => {
  const TEST_CASES = [
    {
      arr: [1, 1, 1, 1, 1, 10000],
      val: 1,
      result: [0, 5],
    },
    {
      arr: [5, 7, 7, 8, 8, 10],
      val: 8,
      result: [3, 5],
    },
    {
      arr: [5, 7, 7, 8, 8, 10],
      val: 6,
      result: [1, 1],
    },
    {
      arr: [],
      val: 0,
      result: [0, 0],
    },
    {
      arr: [2, 2],
      val: 3,
      result: [2, 2],
    },
  ];

  for (let { arr, val, result } of TEST_CASES) {
    const range = equalRange(arr, val);
    expect(range).toEqual(result);
  }
});
