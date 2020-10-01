"use strict";
exports.__esModule = true;
exports.nthElement = void 0;
var tslib_1 = require("tslib");
function selectPivotIdx(lo, hi) {
    return Math.floor(Math.random() * (hi + 1 - lo)) + lo;
}
function partition(arr, lo, hi, pivotIdx) {
    var _a, _b, _c;
    _a = tslib_1.__read([arr[pivotIdx], arr[hi]], 2), arr[hi] = _a[0], arr[pivotIdx] = _a[1];
    var storeIdx = lo;
    for (var i = lo; i < hi; ++i) {
        if (arr[i] < arr[hi]) {
            _b = tslib_1.__read([arr[storeIdx], arr[i]], 2), arr[i] = _b[0], arr[storeIdx] = _b[1];
            ++storeIdx;
        }
    }
    _c = tslib_1.__read([arr[storeIdx], arr[hi]], 2), arr[hi] = _c[0], arr[storeIdx] = _c[1];
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
