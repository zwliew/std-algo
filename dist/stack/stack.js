"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack() {
        this.arr = [];
    }
    Stack.prototype.push = function (item) {
        this.arr.push(item);
    };
    Stack.prototype.pop = function () {
        if (this.empty()) {
            throw Error('Cannot pop from an empty stack');
        }
        return this.arr.pop();
    };
    Stack.prototype.top = function () {
        return this.arr[this.arr.length - 1];
    };
    Stack.prototype.size = function () {
        return this.arr.length;
    };
    Stack.prototype.empty = function () {
        return this.size() === 0;
    };
    return Stack;
}());
exports["default"] = Stack;
