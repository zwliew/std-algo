"use strict";
exports.__esModule = true;
exports.BinaryHeap = void 0;
var BinaryHeap = (function () {
    function BinaryHeap(cmp) {
        this.heap = [];
        if (cmp === undefined) {
            cmp = function (x, y) { return x > y; };
        }
        this.cmp = cmp;
    }
    BinaryHeap.prototype.empty = function () {
        return this.size() === 0;
    };
    BinaryHeap.prototype.size = function () {
        return this.heap.length;
    };
    BinaryHeap.prototype.push = function (item) {
        this.heap.push(item);
        this.siftUp(this.size() - 1);
    };
    BinaryHeap.prototype.pop = function () {
        if (this.empty()) {
            throw Error("Cannot pop from an empty heap.");
        }
        var item = this.heap[0];
        this.heap[0] = this.heap[this.size() - 1];
        this.heap.pop();
        if (!this.empty()) {
            this.siftDown(0);
        }
        return item;
    };
    BinaryHeap.prototype.top = function () {
        if (this.empty()) {
            throw Error("Cannot access the top element in an empty heap.");
        }
        return this.heap[0];
    };
    BinaryHeap.prototype.siftUp = function (i) {
        if (this.size() <= i) {
            throw Error("Heap size too small.");
        }
        var item = this.heap[i];
        for (var parent = (i - 1) >> 1; parent >= 0 && this.cmp(item, this.heap[parent]); i = parent, parent = (i - 1) >> 1) {
            this.heap[i] = this.heap[parent];
        }
        this.heap[i] = item;
    };
    BinaryHeap.prototype.siftDown = function (i) {
        if (this.size() <= i) {
            throw Error("Heap size too small.");
        }
        var item = this.heap[i];
        for (var l = 2 * i + 1, r = 2 * i + 2; (l < this.size() && this.cmp(this.heap[l], item)) ||
            (r < this.size() && this.cmp(this.heap[r], item)); l = 2 * i + 1, r = 2 * i + 2) {
            var nxtIdx = i;
            var largest = item;
            if (l < this.size() && this.cmp(this.heap[l], largest)) {
                nxtIdx = l;
                largest = this.heap[l];
            }
            if (r < this.size() && this.cmp(this.heap[r], largest)) {
                nxtIdx = r;
                largest = this.heap[r];
            }
            this.heap[i] = largest;
            i = nxtIdx;
        }
        this.heap[i] = item;
    };
    return BinaryHeap;
}());
exports.BinaryHeap = BinaryHeap;
