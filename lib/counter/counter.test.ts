import { Counter } from "./counter";
import { randInt } from "../math/random";

test("Counter keeps counts of a key correctly", () => {
  const KEY = "key";
  let sum = 0;
  const counter = new Counter();
  expect(counter.get(KEY)).toBe(sum);
  for (let t = 0; t < 100; ++t) {
    for (let i = 0; i < randInt(1, 1000); ++i) {
      const x = randInt(0, 10000);
      counter.add(KEY, x);
      sum += x;
      expect(counter.get(KEY)).toBe(sum);
    }
  }
});
