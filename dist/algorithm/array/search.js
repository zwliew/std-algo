"use strict";
exports.__esModule = true;
exports.equalRange = exports.upperBound = exports.lowerBound = exports.binarySearch = void 0;
function binarySearch(arr, val, comp) {
    var lo = -1;
    var hi = arr.length;
    while (lo < hi - 1) {
        var mid = lo + Math.floor((hi - lo) / 2);
        if (comp(arr[mid], val)) {
            hi = mid;
        }
        else {
            lo = mid;
        }
    }
    return hi;
}
exports.binarySearch = binarySearch;
function lowerBound(arr, val) {
    return binarySearch(arr, val, function (lhs, rhs) { return lhs >= rhs; });
}
exports.lowerBound = lowerBound;
function upperBound(arr, val) {
    return binarySearch(arr, val, function (lhs, rhs) { return lhs > rhs; });
}
exports.upperBound = upperBound;
function equalRange(arr, val) {
    return [lowerBound(arr, val), upperBound(arr, val)];
}
exports.equalRange = equalRange;
