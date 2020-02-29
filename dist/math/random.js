"use strict";
exports.__esModule = true;
/**
 * Returns a random integer within the range [min, max).
 * max is excluded from the range, while min is included.
 * @param {number} min The minimum integer that can be generated.
 * @param {number} max The maximum integer that can be generated.
 * @returns {number} A randomly-generated integer within the range [min, max).
 */
function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.randInt = randInt;
/**
 * Returns a random number within the range [min, max).
 * max is excluded from the range, while min is included.
 * @param {number} min The minimum number that can be generated.
 * @param {number} max The maximum number that can be generated.
 * @returns {number} A randomly-generated number within the range [min, max).
 */
function randNumber(min, max) {
    return Math.random() * (max - min) + min;
}
exports.randNumber = randNumber;
