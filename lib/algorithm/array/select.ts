function selectPivotIdx(lo: number, hi: number) {
  return Math.floor(Math.random() * (hi + 1 - lo)) + lo;
}

function partition<T>(
  arr: T[],
  lo: number,
  hi: number,
  pivotIdx: number
): number {
  [arr[hi], arr[pivotIdx]] = [arr[pivotIdx], arr[hi]];
  let storeIdx = lo;
  for (let i = lo; i < hi; ++i) {
    if (arr[i] < arr[hi]) {
      [arr[i], arr[storeIdx]] = [arr[storeIdx], arr[i]];
      ++storeIdx;
    }
  }
  [arr[hi], arr[storeIdx]] = [arr[storeIdx], arr[hi]];
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
  let lo = 0;
  let hi = arr.length - 1;
  while (lo < hi) {
    let pivotIdx = selectPivotIdx(lo, hi);
    pivotIdx = partition(arr, lo, hi, pivotIdx);

    if (n === pivotIdx) {
      return arr[n];
    }

    if (n < pivotIdx) {
      hi = pivotIdx - 1;
    } else {
      lo = pivotIdx + 1;
    }
  }
  return arr[lo];
}
