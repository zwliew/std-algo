"use strict";
exports.__esModule = true;
var Node = /** @class */ (function () {
    function Node(prev, item, next) {
        this.item = item;
        this.next = next;
        this.prev = prev;
    }
    return Node;
}());
var List = /** @class */ (function () {
    function List() {
        this.size = 0;
        this.front = null;
        this.back = null;
    }
    List.prototype.empty = function () {
        return this.size === 0;
    };
    List.prototype.pushFront = function (item) {
        var newNode = new Node(null, item, this.front);
        if (this.front) {
            this.front.prev = newNode;
        }
        else {
            this.back = newNode;
        }
        this.front = newNode;
        ++this.size;
    };
    List.prototype.pushBack = function (item) {
        var newNode = new Node(this.back, item, null);
        if (this.back) {
            this.back.next = newNode;
        }
        else {
            this.front = newNode;
        }
        this.back = newNode;
        ++this.size;
    };
    List.prototype.popFront = function () {
        var f = this.front;
        if (f === null) {
            throw Error('List is empty');
        }
        var item = f.item;
        var next = f.next;
        f.item = null;
        f.next = null;
        this.front = next;
        if (!next) {
            this.back = null;
        }
        else {
            next.prev = null;
        }
        --this.size;
        return item;
    };
    List.prototype.popBack = function () {
        var b = this.back;
        if (b === null) {
            throw Error('List is empty');
        }
        var item = b.item;
        var prev = b.prev;
        b.item = null;
        b.prev = null;
        this.back = prev;
        if (!prev) {
            this.back = null;
        }
        else {
            prev.next = null;
        }
        --this.size;
        return item;
    };
    List.prototype.clear = function () {
        for (var x = this.front; x !== null;) {
            var next = x.next;
            x.item = null;
            x.next = null;
            x.prev = null;
            x = next;
        }
        this.front = this.back = null;
        this.size = 0;
    };
    List.prototype.insertBefore = function (node, item) {
        if (node === null) {
            throw Error("Can't insert before a null node");
        }
        var newNode = new Node(node.prev, item, node);
        node.prev = newNode;
        if (node.prev === null) {
            this.front = newNode;
        }
        else {
            node.prev.next = newNode;
        }
        ++this.size;
    };
    List.prototype.insert = function (idx, item) {
        if (idx < 0 || idx > this.size) {
            throw Error('Index out of bounds');
        }
        if (idx === this.size) {
            this.pushBack(item);
            return;
        }
        if (idx === 0) {
            this.pushFront(item);
            return;
        }
        var x = this.front;
        for (; idx > 0; --idx, x = (x === null || x === void 0 ? void 0 : x.next) || null)
            ;
        this.insertBefore(x, item);
    };
    return List;
}());
exports["default"] = List;
