import { randInt } from "../../math/random";
import { BinaryHeap } from "./binaryHeap";

test("BinaryHeap can be used to heapsort elements correctly", () => {
  for (let i = 0; i < 10; ++i) {
    const origArr: number[] = [];
    for (let j = 0; j < randInt(1, 100); ++j) {
      origArr.push(Math.random());
    }
    const sortedArr = [...origArr];
    sortedArr.sort((a, b) => b - a);

    const heap = new BinaryHeap({ arr: origArr });
    const heapSortedArr = [];
    while (!heap.empty()) {
      heapSortedArr.push(heap.pop());
    }
    expect(heapSortedArr).toEqual(sortedArr);
  }
});
