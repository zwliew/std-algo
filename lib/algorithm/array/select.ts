import { randInt } from "../../math/random";

function partition<T>(
  arr: T[],
  lo: number,
  hi: number,
  pivotIdx: number
): number {
  [arr[hi - 1], arr[pivotIdx]] = [arr[pivotIdx], arr[hi - 1]];
  let storeIdx = lo;
  for (let i = lo; i < hi; ++i) {
    if (arr[i] < arr[hi - 1]) {
      [arr[i], arr[storeIdx]] = [arr[storeIdx], arr[i]];
      ++storeIdx;
    }
  }
  [arr[hi - 1], arr[storeIdx]] = [arr[storeIdx], arr[hi - 1]];
  return storeIdx;
}

/**
 * Returns the element at index n (0-indexed) if the array were sorted.
 * This also rearranges the elements in the specified array such that:
 * - The element at index n is changed to the nth element if the array were sorted.
 * - All elements before index n are less than or equal to the elements after index n.
 * @param {T[]} arr The array that contains the element to be selected.
 * @param {number} n The index of the element to be selected.
 * @return {T} The nth element if the array were sorted.
 */
export function nthElement<T>(arr: T[], n: number): T {
  if (n >= arr.length || n < 0) {
    throw Error("Given index is out of bounds.");
  }

  let lo = 0;
  let hi = arr.length;
  while (lo < hi - 1) {
    let pivotIdx = randInt(lo, hi);
    pivotIdx = partition(arr, lo, hi, pivotIdx);
    if (n < pivotIdx) {
      hi = pivotIdx;
    } else {
      lo = pivotIdx;
    }
  }
  return arr[lo];
}
