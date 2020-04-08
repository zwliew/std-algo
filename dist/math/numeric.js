"use strict";
exports.__esModule = true;
exports.lcm = exports.gcd = void 0;
function gcd(a, b) {
    var tmp;
    while (b) {
        tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}
exports.gcd = gcd;
function lcm(a, b) {
    return (a / gcd(a, b)) * b;
}
exports.lcm = lcm;
