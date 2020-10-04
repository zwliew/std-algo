"use strict";
exports.__esModule = true;
exports.RandomizedHeap = void 0;
var tslib_1 = require("tslib");
var Node = (function () {
    function Node(val) {
        this.val = val;
    }
    return Node;
}());
var RandomizedHeap = (function () {
    function RandomizedHeap(_a) {
        var e_1, _b;
        var arr = _a.arr, cmp = _a.cmp;
        this.sz = 0;
        if (!(cmp instanceof Function)) {
            cmp = function (x, y) { return x > y; };
        }
        this.cmp = cmp;
        if (arr instanceof Array) {
            try {
                for (var arr_1 = tslib_1.__values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
                    var x = arr_1_1.value;
                    this.push(x);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (arr_1_1 && !arr_1_1.done && (_b = arr_1["return"])) _b.call(arr_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    }
    RandomizedHeap.prototype.empty = function () {
        return this.size() === 0;
    };
    RandomizedHeap.prototype.size = function () {
        return this.sz;
    };
    RandomizedHeap.prototype.push = function (item) {
        ++this.sz;
        var node = new Node(item);
        this.root = this.meld(this.root, node);
    };
    RandomizedHeap.prototype.pop = function () {
        if (this.empty()) {
            throw Error("Cannot pop from an empty heap.");
        }
        var item = this.top();
        this.root = this.meld(this.root.left, this.root.right);
        --this.sz;
        return item;
    };
    RandomizedHeap.prototype.top = function () {
        if (this.empty()) {
            throw Error("Cannot access top element in an empty heap.");
        }
        return this.root.val;
    };
    RandomizedHeap.prototype.meld = function (x, y) {
        var _a, _b;
        if (!x) {
            return y;
        }
        if (!y) {
            return x;
        }
        if (this.cmp(y.val, x.val)) {
            _a = tslib_1.__read([y, x], 2), x = _a[0], y = _a[1];
        }
        if (Math.random() >= 0.5) {
            _b = tslib_1.__read([x.right, x.left], 2), x.left = _b[0], x.right = _b[1];
        }
        x.left = this.meld(x.left, y);
        return x;
    };
    return RandomizedHeap;
}());
exports.RandomizedHeap = RandomizedHeap;
