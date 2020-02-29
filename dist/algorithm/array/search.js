"use strict";
exports.__esModule = true;
/**
 * Returns the index of the first element in the array that satisfies the comparator function.
 * The array must be sorted prior to making this call.
 * @param {any} arr The array to be searched
 * @param {any} val The value to search for
 * @param {(lhs: any, rhs: any) => boolean} comp The comparator function to use.
 * @returns {number} The index of the first element not less than the specified value.
 *                    If no such element exists, the length of the array is returned.
 */
function binarySearch(arr, val, comp) {
    var lo = 0;
    var hi = arr.length - 1;
    var idx = arr.length;
    while (lo <= hi) {
        var mid = lo + Math.floor((hi - lo) / 2);
        if (comp(arr[mid], val)) {
            idx = mid;
            hi = mid - 1;
        }
        else {
            lo = mid + 1;
        }
    }
    return idx;
}
exports.binarySearch = binarySearch;
/**
 * Returns the index of the first element in the array that is not less than
 * the specified value. The array must be sorted prior to making this call.
 * @param {any} arr The array to be searched
 * @param {any} val The value to search for
 * @returns {number} The index of the first element not less than the specified value.
 *                    If no such element exists, the length of the array is returned.
 */
function lowerBound(arr, val) {
    return binarySearch(arr, val, function (lhs, rhs) { return lhs >= rhs; });
}
exports.lowerBound = lowerBound;
/**
 * Returns the index of the first element in the array that is greater than
 * the specified value. The array must be sorted prior to making this call.
 * @param {any} arr The array to be searched
 * @param {any} val The value to search for
 * @returns {number} The index of the first element greater than the specified value.
 *                    If no such element exists, the length of the array is returned.
 */
function upperBound(arr, val) {
    return binarySearch(arr, val, function (lhs, rhs) { return lhs > rhs; });
}
exports.upperBound = upperBound;
/**
 * Returns a range containing all the elements in the array that are equal to the specified value.
 * The first element in the range contains the index of the first element not less than the value.
 * The second element in the range contains the index of the first element greater than the value.
 * The array must be sorted prior to making this call.
 * @param {any} arr The array to be searched
 * @param {any} val The value to search for
 * @returns {[number, number]} The range containing all the elements in the array
 * that are equal to the specified value.
 */
function equalRange(arr, val) {
    return [lowerBound(arr, val), upperBound(arr, val)];
}
exports.equalRange = equalRange;
