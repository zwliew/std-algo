"use strict";
exports.__esModule = true;
var deque_1 = require("./deque");
var Queue = /** @class */ (function () {
    function Queue() {
        this.deque = new deque_1.Deque();
    }
    Queue.prototype.front = function () {
        return this.deque.getFront();
    };
    Queue.prototype.back = function () {
        return this.deque.getBack();
    };
    Queue.prototype.push = function (item) {
        this.deque.pushBack(item);
    };
    Queue.prototype.pop = function () {
        return this.deque.popFront();
    };
    Queue.prototype.empty = function () {
        return this.deque.empty();
    };
    Queue.prototype.size = function () {
        return this.deque.size;
    };
    return Queue;
}());
exports["default"] = Queue;
