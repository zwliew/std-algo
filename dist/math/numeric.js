"use strict";
exports.__esModule = true;
exports.div = exports.lcm = exports.gcd = void 0;
function gcd(a, b) {
    var _a;
    while (b) {
        a = a % b;
        _a = [b, a], a = _a[0], b = _a[1];
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
