"use strict";
exports.__esModule = true;
exports.nthElement = void 0;
var tslib_1 = require("tslib");
var random_1 = require("../../math/random");
function partition(arr, lo, hi, pivotIdx) {
    var _a, _b, _c;
    _a = tslib_1.__read([arr[pivotIdx], arr[hi - 1]], 2), arr[hi - 1] = _a[0], arr[pivotIdx] = _a[1];
    var storeIdx = lo;
    for (var i = lo; i < hi; ++i) {
        if (arr[i] < arr[hi - 1]) {
            _b = tslib_1.__read([arr[storeIdx], arr[i]], 2), arr[i] = _b[0], arr[storeIdx] = _b[1];
            ++storeIdx;
        }
    }
    _c = tslib_1.__read([arr[storeIdx], arr[hi - 1]], 2), arr[hi - 1] = _c[0], arr[storeIdx] = _c[1];
    return storeIdx;
}
function nthElement(arr, n) {
    if (n >= arr.length || n < 0) {
        throw Error("Given index is out of bounds.");
    }
    var lo = 0;
    var hi = arr.length;
    while (lo < hi - 1) {
        var pivotIdx = random_1.randInt(lo, hi);
        pivotIdx = partition(arr, lo, hi, pivotIdx);
        if (n < pivotIdx) {
            hi = pivotIdx;
        }
        else {
            lo = pivotIdx;
        }
    }
    return arr[lo];
}
exports.nthElement = nthElement;
