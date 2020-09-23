"use strict";
exports.__esModule = true;
var Node = (function () {
    function Node(item, prev, next) {
        this.item = item;
        this.next = next;
        this.prev = prev;
    }
    return Node;
}());
var LinkedList = (function () {
    function LinkedList() {
        this.size = 0;
        this.front = new Node("sentinel", null, null);
        this.back = new Node("sentinel", null, null);
    }
    LinkedList.prototype.empty = function () {
        return this.size === 0;
    };
    LinkedList.prototype.pushFront = function (item) {
        var newNode = new Node(item, this.front, this.front.next);
        this.front.next = newNode;
        if (this.empty()) {
            this.back.prev = newNode;
        }
        ++this.size;
    };
    LinkedList.prototype.pushBack = function (item) {
        var newNode = new Node(item, this.back.prev, this.back);
        this.back.prev = newNode;
        if (this.empty()) {
            this.front.next = newNode;
        }
        ++this.size;
    };
    LinkedList.prototype.popFront = function () {
        var _a, _b, _c;
        if (this.empty()) {
            throw Error("List is empty.");
        }
        var item = (_a = this.front.next) === null || _a === void 0 ? void 0 : _a.item;
        this.front.next = (_b = this.front.next) === null || _b === void 0 ? void 0 : _b.next;
        --this.size;
        if (this.empty()) {
            this.back.prev = (_c = this.back.prev) === null || _c === void 0 ? void 0 : _c.prev;
        }
        return item;
    };
    LinkedList.prototype.popBack = function () {
        var _a, _b, _c;
        if (this.empty()) {
            throw Error("List is empty.");
        }
        var item = (_a = this.back.prev) === null || _a === void 0 ? void 0 : _a.item;
        this.back.prev = (_b = this.back.prev) === null || _b === void 0 ? void 0 : _b.prev;
        --this.size;
        if (this.empty()) {
            this.front.next = (_c = this.front.next) === null || _c === void 0 ? void 0 : _c.next;
        }
        return item;
    };
    LinkedList.prototype.clear = function () {
        this.front.next = this.back.prev = null;
        this.size = 0;
    };
    LinkedList.prototype.getFront = function () {
        var _a;
        if (this.empty()) {
            throw Error("List is empty.");
        }
        return (_a = this.front.next) === null || _a === void 0 ? void 0 : _a.item;
    };
    LinkedList.prototype.getBack = function () {
        var _a;
        if (this.empty()) {
            throw Error("List is empty.");
        }
        return (_a = this.back.prev) === null || _a === void 0 ? void 0 : _a.item;
    };
    return LinkedList;
}());
exports["default"] = LinkedList;
