"use strict";
exports.__esModule = true;
function count(arr, val) {
    var count = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var el = arr_1[_i];
        if (el === val) {
            ++count;
        }
    }
    return count;
}
exports.count = count;
function countIf(arr, pred) {
    var count = 0;
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var el = arr_2[_i];
        if (pred(el)) {
            ++count;
        }
    }
    return count;
}
exports.countIf = countIf;
