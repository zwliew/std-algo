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
    if (!exp) {
        return 1;
    }
    base %= mod;
    var ret = pow(base, exp >> 1, mod);
    ret = Math.pow(ret, 2) % mod;
    if (exp & 1) {
        ret = (ret * base) % mod;
    }
    return ret;
}
exports.pow = pow;
