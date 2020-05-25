"use strict";
exports.__esModule = true;
exports.clamp = void 0;
function clamp(val, lo, hi) {
    return val < lo ? lo : val > hi ? hi : val;
}
exports.clamp = clamp;
