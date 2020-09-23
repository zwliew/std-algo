"use strict";
exports.__esModule = true;
exports.ArrayStack = void 0;
var ArrayStack = (function () {
    function ArrayStack() {
        this.arr = [];
    }
    ArrayStack.prototype.push = function (item) {
        this.arr.push(item);
    };
    ArrayStack.prototype.pop = function () {
        if (this.empty()) {
            throw Error("Cannot pop from an empty stack");
        }
        return this.arr.pop();
    };
    ArrayStack.prototype.top = function () {
        if (this.empty()) {
            throw Error("The stack is empty.");
        }
        return this.arr[this.arr.length - 1];
    };
    ArrayStack.prototype.size = function () {
        return this.arr.length;
    };
    ArrayStack.prototype.empty = function () {
        return this.size() === 0;
    };
    ArrayStack.prototype.clear = function () {
        this.arr = [];
    };
    return ArrayStack;
}());
exports.ArrayStack = ArrayStack;
