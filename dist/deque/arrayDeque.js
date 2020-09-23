"use strict";
exports.__esModule = true;
exports.ArrayDeque = void 0;
var ArrayDeque = (function () {
    function ArrayDeque() {
        this.arr = new Array(16);
        this.front = -1;
        this.back = -1;
        this.size = 0;
    }
    ArrayDeque.prototype.empty = function () {
        return this.size === 0;
    };
    ArrayDeque.prototype.getFront = function () {
        if (this.empty()) {
            throw Error("Cannot get front of empty deque");
        }
        return this.arr[this.front];
    };
    ArrayDeque.prototype.getBack = function () {
        if (this.empty()) {
            throw Error("Cannot get back of empty deque");
        }
        return this.arr[this.back];
    };
    ArrayDeque.prototype.pushFront = function (item) {
        if (this.empty()) {
            this.front = this.back = 0;
        }
        else {
            this.front = this.dec(this.front);
        }
        this.arr[this.front] = item;
        ++this.size;
        this.resizeIfNeeded();
    };
    ArrayDeque.prototype.pushBack = function (item) {
        if (this.empty()) {
            this.front = this.back = 0;
        }
        else {
            this.back = this.inc(this.back);
        }
        this.arr[this.back] = item;
        ++this.size;
        this.resizeIfNeeded();
    };
    ArrayDeque.prototype.popFront = function () {
        if (this.empty()) {
            throw Error("Cannot pop from an empty deque");
        }
        var item = this.arr[this.front];
        this.front = this.inc(this.front);
        --this.size;
        return item;
    };
    ArrayDeque.prototype.popBack = function () {
        if (this.empty()) {
            throw Error("Cannot pop from an empty deque");
        }
        var item = this.arr[this.back];
        this.back = this.dec(this.back);
        --this.size;
        return item;
    };
    ArrayDeque.prototype.clear = function () {
        this.arr = new Array(16);
        this.front = -1;
        this.back = -1;
        this.size = 0;
    };
    ArrayDeque.prototype.resizeIfNeeded = function () {
        if (this.size === this.arr.length) {
            this.resize(this.arr.length * 2);
        }
    };
    ArrayDeque.prototype.resize = function (newSize) {
        var newArr = new Array(newSize);
        for (var idx = this.front, i = 0; i < this.size; idx = this.inc(idx), ++i) {
            newArr[i] = this.arr[idx];
        }
        this.arr = newArr;
        this.front = 0;
        this.back = this.size - 1;
    };
    ArrayDeque.prototype.inc = function (idx) {
        return (idx + 1) % this.arr.length;
    };
    ArrayDeque.prototype.dec = function (idx) {
        return (idx - 1 + this.arr.length) % this.arr.length;
    };
    return ArrayDeque;
}());
exports.ArrayDeque = ArrayDeque;
