"use strict";
exports.__esModule = true;
var ArrayDeque = (function () {
    function ArrayDeque() {
        this.arr = new Array(16);
        this.front = -1;
        this.back = 0;
        this.size = 0;
    }
    ArrayDeque.prototype.empty = function () {
        return this.size === 0;
    };
    ArrayDeque.prototype.getFront = function () {
        if (this.size === 0) {
            throw Error('Cannot get front of empty deque');
        }
        return this.arr[this.front];
    };
    ArrayDeque.prototype.getBack = function () {
        if (this.size === 0) {
            throw Error('Cannot get back of empty deque');
        }
        return this.arr[ArrayDeque.dec(this.back, this.arr.length)];
    };
    ArrayDeque.prototype.pushFront = function (item) {
        var newFront = ArrayDeque.dec(this.front, this.arr.length);
        this.arr[newFront] = item;
        this.front = newFront;
        ++this.size;
        this.resizeIfNeeded();
    };
    ArrayDeque.prototype.pushBack = function (item) {
        this.arr[this.back] = item;
        this.back = ArrayDeque.inc(this.back, this.arr.length);
        ++this.size;
        this.resizeIfNeeded();
    };
    ArrayDeque.prototype.popFront = function () {
        if (this.empty()) {
            throw Error('Cannot pop from an empty deque');
        }
        var item = this.arr[this.front];
        this.front = ArrayDeque.inc(this.front, this.arr.length);
        --this.size;
        return item;
    };
    ArrayDeque.prototype.popBack = function () {
        if (this.empty()) {
            throw Error('Cannot pop from an empty deque');
        }
        this.back = ArrayDeque.dec(this.back, this.arr.length);
        --this.size;
        return this.arr[this.back];
    };
    ArrayDeque.prototype.clear = function () {
        this.arr = [];
        this.front = -1;
        this.back = 0;
        this.size = 0;
    };
    ArrayDeque.prototype.resizeIfNeeded = function () {
        if (this.size === this.arr.length) {
            this.resize(this.arr.length * 2);
        }
    };
    ArrayDeque.prototype.resize = function (newSize) {
        var newArr = new Array(newSize);
        for (var idx = this.front; idx !== this.back; idx = ArrayDeque.inc(idx, this.arr.length)) {
            newArr[idx] = this.arr[idx];
        }
        this.arr = newArr;
        this.front = 0;
        this.back = this.size;
    };
    ArrayDeque.inc = function (idx, mod) {
        return (idx + 1) % mod;
    };
    ArrayDeque.dec = function (idx, mod) {
        return (idx - 1 + mod) % mod;
    };
    return ArrayDeque;
}());
exports["default"] = ArrayDeque;
