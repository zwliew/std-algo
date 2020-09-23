import { nthElement } from "./select";
import { randInt } from "../../math/random";

test("nthElement() rearranges an array correctly", () => {
  for (let i = 0; i < 10; ++i) {
    const origArr = [];
    for (let j = 0; j < randInt(1, 100); ++j) {
      origArr.push(Math.random());
    }
    const sortedArr = [...origArr];
    sortedArr.sort((a, b) => a - b);

    for (let j = 0; j < origArr.length; ++j) {
      const modifiedArr = [...origArr];
      nthElement(modifiedArr, j);
      for (let k = 0; k < modifiedArr.length; ++k) {
        expect(
          (modifiedArr[k] <= sortedArr[j] && k <= j) ||
            (modifiedArr[k] >= sortedArr[j] && k >= j)
        ).toBeTruthy();
      }
    }
  }
});
