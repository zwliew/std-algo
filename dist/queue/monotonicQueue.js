"use strict";
exports.__esModule = true;
exports.MonotonicQueue = void 0;
var deque_1 = require("./deque");
var MonotonicQueue = (function () {
    function MonotonicQueue(cmp) {
        this.deque = new deque_1.Deque();
        this.cmp = cmp;
    }
    MonotonicQueue.prototype.push = function (value) {
        var count = 1;
        while (!this.deque.empty() && this.cmp(this.deque.getBack().value, value)) {
            count += this.deque.popBack().count;
        }
        this.deque.pushBack({ value: value, count: count });
    };
    MonotonicQueue.prototype.pop = function () {
        if (this.empty()) {
            throw Error("Cannot pop from an empty queue");
        }
        var value = this.top();
        this.deque.getFront().count--;
        if (this.deque.getFront().count === 0) {
            this.deque.popFront();
        }
        return value;
    };
    MonotonicQueue.prototype.top = function () {
        if (this.empty()) {
            throw Error("Cannot get top value from an empty queue");
        }
        return this.deque.getFront().value;
    };
    MonotonicQueue.prototype.empty = function () {
        return this.deque.empty();
    };
    MonotonicQueue.prototype.size = function () {
        return this.deque.size;
    };
    return MonotonicQueue;
}());
exports.MonotonicQueue = MonotonicQueue;
