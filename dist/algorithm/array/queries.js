"use strict";
exports.__esModule = true;
exports.countIf = exports.count = void 0;
var tslib_1 = require("tslib");
function count(arr, val) {
    var e_1, _a;
    var count = 0;
    try {
        for (var arr_1 = tslib_1.__values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
            var el = arr_1_1.value;
            if (el === val) {
                ++count;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (arr_1_1 && !arr_1_1.done && (_a = arr_1["return"])) _a.call(arr_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return count;
}
exports.count = count;
function countIf(arr, pred) {
    var e_2, _a;
    var count = 0;
    try {
        for (var arr_2 = tslib_1.__values(arr), arr_2_1 = arr_2.next(); !arr_2_1.done; arr_2_1 = arr_2.next()) {
            var el = arr_2_1.value;
            if (pred(el)) {
                ++count;
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (arr_2_1 && !arr_2_1.done && (_a = arr_2["return"])) _a.call(arr_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return count;
}
exports.countIf = countIf;
