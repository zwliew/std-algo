"use strict";
exports.__esModule = true;
exports.div = exports.lcm = exports.gcd = void 0;
var tslib_1 = require("tslib");
function gcd(a, b) {
    var _a;
    while (b) {
        a = a % b;
        _a = tslib_1.__read([b, a], 2), a = _a[0], b = _a[1];
    }
    return a;
}
exports.gcd = gcd;
function lcm(a, b) {
    return (a / gcd(a, b)) * b;
}
exports.lcm = lcm;
function div(a, b) {
    return {
        quotient: Math.floor(a / b),
        remainder: a % b
    };
}
exports.div = div;
