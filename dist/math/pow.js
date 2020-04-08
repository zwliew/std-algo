"use strict";
exports.__esModule = true;
exports.pow = void 0;
function pow(base, exp, mod) {
    if (!mod) {
        return Math.pow(base, exp);
    }
    if (exp < 0 && mod) {
        throw Error('Cannot exponentiate with negative exponents while taking modulo.');
    }
    base %= mod;
    var ret = 1;
    while (exp) {
        if (exp & 1) {
            ret = (ret * base) % mod;
        }
        exp >>= 1;
        base = Math.pow(base, 2) % mod;
    }
    return ret;
}
exports.pow = pow;
