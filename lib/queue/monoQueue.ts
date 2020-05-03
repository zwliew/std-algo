import { Deque } from "./deque";

export class MonoQueue {
  private deque = new Deque();
  private cmp: (x: any, y: any) => boolean;

  constructor(cmp: (x: any, y: any) => boolean) {
    this.cmp = cmp;
  }

  push(value: any) {
    let count = 1;
    while (!this.deque.empty() && this.cmp(this.deque.getBack().value, value)) {
      count += this.deque.popBack().count;
    }
    this.deque.pushBack({ value, count });
  }

  pop() {
    if (this.empty()) {
      throw Error("Cannot pop from an empty queue");
    }
    const value = this.top();
    this.deque.getFront().count--;
    if (this.deque.getFront().count === 0) {
      this.deque.popFront();
    }
    return value;
  }

  top() {
    if (this.empty()) {
      throw Error("Cannot get top value from an empty queue");
    }
    return this.deque.getFront().value;
  }

  empty() {
    return this.deque.empty();
  }

  size() {
    return this.deque.size;
  }
}
