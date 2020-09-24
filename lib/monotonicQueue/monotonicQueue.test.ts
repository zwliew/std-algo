import { randInt } from "../math/random";
import { MonotonicQueue } from "./monotonicQueue";

test("MonotonicQueue works as a maximum sliding window correctly correctly", () => {
  // This test is inspired by https://leetcode.com/problems/sliding-window-maximum/
  for (let i = 0; i < 100; ++i) {
    const testArr = [];
    for (let j = 0; j < randInt(1, 100); ++j) {
      testArr.push(Math.random());
    }

    const expected = [];
    const result = [];
    const windowLen = randInt(1, testArr.length);
    const q = new MonotonicQueue();
    for (let j = 0; j < windowLen - 1; ++j) {
      q.push(testArr[j]);
    }

    for (let j = windowLen; j <= testArr.length; ++j) {
      let curMax = Number.NEGATIVE_INFINITY;
      for (let k = j - windowLen; k < j; ++k) {
        curMax = Math.max(curMax, testArr[k]);
      }
      expected.push(curMax);

      q.push(testArr[j - 1]);
      if (j > windowLen) {
        q.pop();
      }
      result.push(q.top());
    }

    expect(result).toEqual(expected);
  }
});
