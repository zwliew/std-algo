"use strict";
exports.__esModule = true;
exports.nthElement = void 0;
function selectPivotIdx(lo, hi) {
    return Math.floor(Math.random() * (hi + 1 - lo)) + lo;
}
function partition(arr, lo, hi, pivotIdx) {
    var tmp = arr[hi];
    arr[hi] = arr[pivotIdx];
    arr[pivotIdx] = tmp;
    var storeIdx = lo;
    for (var i = lo; i < hi - 1; ++i) {
        if (arr[i] < arr[hi]) {
            tmp = arr[i];
            arr[i] = arr[storeIdx];
            arr[storeIdx] = tmp;
            ++storeIdx;
        }
    }
    tmp = arr[storeIdx];
    arr[storeIdx] = arr[hi];
    arr[hi] = tmp;
    return storeIdx;
}
function nthElement(arr, n) {
    var lo = 0;
    var hi = arr.length - 1;
    while (lo < hi) {
        var pivotIdx = selectPivotIdx(lo, hi);
        pivotIdx = partition(arr, lo, hi, pivotIdx);
        if (n === pivotIdx) {
            return arr[n];
        }
        if (n < pivotIdx) {
            hi = pivotIdx - 1;
        }
        else {
            lo = pivotIdx + 1;
        }
    }
    return arr[lo];
}
exports.nthElement = nthElement;
