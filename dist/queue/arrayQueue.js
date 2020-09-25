"use strict";
exports.__esModule = true;
exports.ArrayQueue = void 0;
var deque_1 = require("../deque");
var ArrayQueue = (function () {
    function ArrayQueue() {
        this.deque = new deque_1.Deque();
    }
    ArrayQueue.prototype.size = function () {
        return this.deque.size();
    };
    ArrayQueue.prototype.getFront = function () {
        return this.deque.getFront();
    };
    ArrayQueue.prototype.getBack = function () {
        return this.deque.getBack();
    };
    ArrayQueue.prototype.push = function (item) {
        this.deque.pushBack(item);
    };
    ArrayQueue.prototype.pop = function () {
        return this.deque.popFront();
    };
    ArrayQueue.prototype.empty = function () {
        return this.deque.empty();
    };
    ArrayQueue.prototype.clear = function () {
        this.deque.clear();
    };
    return ArrayQueue;
}());
exports.ArrayQueue = ArrayQueue;
