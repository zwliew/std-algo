/**
 * Returns the index of the first element in the array that satisfies the comparator function.
 * The array must be sorted prior to making this call.
 * @param {T} arr The array to be searched
 * @param {T} val The value to search for
 * @param {(lhs: T, rhs: T) => boolean} comp The comparator function to use.
 * @returns {number} The index of the first element not less than the specified value.
 *                    If no such element exists, the length of the array is returned.
 */
export function binarySearch<T>(
  arr: T[],
  val: T,
  comp: (lhs: T, rhs: T) => boolean
): number {
  let lo = -1;
  let hi = arr.length;
  while (lo < hi - 1) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (comp(arr[mid], val)) {
      hi = mid;
    } else {
      lo = mid;
    }
  }
  return hi;
}

/**
 * Returns the index of the first element in the array that is not less than
 * the specified value. The array must be sorted prior to making this call.
 * @param {T} arr The array to be searched
 * @param {T} val The value to search for
 * @returns {number} The index of the first element not less than the specified value.
 *                    If no such element exists, the length of the array is returned.
 */
export function lowerBound<T>(arr: T[], val: T): number {
  return binarySearch(arr, val, (lhs, rhs) => lhs >= rhs);
}

/**
 * Returns the index of the first element in the array that is greater than
 * the specified value. The array must be sorted prior to making this call.
 * @param {T[]} arr The array to be searched
 * @param {T} val The value to search for
 * @returns {number} The index of the first element greater than the specified value.
 *                    If no such element exists, the length of the array is returned.
 */
export function upperBound<T>(arr: T[], val: T): number {
  return binarySearch(arr, val, (lhs, rhs) => lhs > rhs);
}

/**
 * Returns a range containing all the elements in the array that are equal to the specified value.
 * The first element in the range contains the index of the first element not less than the value.
 * The second element in the range contains the index of the first element greater than the value.
 * The array must be sorted prior to making this call.
 * @param {T[]} arr The array to be searched
 * @param {T} val The value to search for
 * @returns {[number, number]} The range containing all the elements in the array
 * that are equal to the specified value.
 */
export function equalRange<T>(arr: T[], val: T): [number, number] {
  return [lowerBound(arr, val), upperBound(arr, val)];
}
