"use strict";
exports.__esModule = true;
exports.randNumber = exports.randInt = void 0;
function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.randInt = randInt;
function randNumber(min, max) {
    return Math.random() * (max - min) + min;
}
exports.randNumber = randNumber;
