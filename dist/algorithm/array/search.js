"use strict";
exports.__esModule = true;
exports.equalRange = exports.upperBound = exports.lowerBound = exports.binarySearch = void 0;
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
