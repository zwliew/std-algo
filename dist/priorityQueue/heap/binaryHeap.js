"use strict";
exports.__esModule = true;
exports.BinaryHeap = void 0;
var BinaryHeap = (function () {
    function BinaryHeap() {
        this.size = 0;
        this.arr = [];
    }
    BinaryHeap.prototype.empty = function () {
        return this.size === 0;
    };
    BinaryHeap.prototype.push = function (item) {
        this.arr.push(item);
    };
    BinaryHeap.prototype.pop = function () {
        throw new Error("Method not implemented.");
    };
    BinaryHeap.prototype.top = function () {
        throw new Error("Method not implemented.");
    };
    return BinaryHeap;
}());
exports.BinaryHeap = BinaryHeap;
exports["default"] = BinaryHeap;
