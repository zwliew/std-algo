"use strict";
exports.__esModule = true;
exports.MonoQueue = void 0;
var deque_1 = require("./deque");
var MonoQueue = (function () {
    function MonoQueue(cmp) {
        this.deque = new deque_1.Deque();
        this.cmp = cmp;
    }
    MonoQueue.prototype.push = function (value) {
        var count = 1;
        while (!this.deque.empty() && this.cmp(this.deque.getBack().value, value)) {
            count += this.deque.popBack().count;
        }
        this.deque.pushBack({ value: value, count: count });
    };
    MonoQueue.prototype.pop = function () {
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
    MonoQueue.prototype.top = function () {
        if (this.empty()) {
            throw Error("Cannot get top value from an empty queue");
        }
        return this.deque.getFront().value;
    };
    MonoQueue.prototype.empty = function () {
        return this.deque.empty();
    };
    MonoQueue.prototype.size = function () {
        return this.deque.size;
    };
    return MonoQueue;
}());
exports.MonoQueue = MonoQueue;
