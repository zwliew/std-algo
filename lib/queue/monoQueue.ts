import { Deque } from "./deque";

export class MonoQueue<T> {
  private deque = new Deque();
  private cmp: (x: T, y: T) => boolean;

  constructor(cmp: (x: T, y: T) => boolean) {
    this.cmp = cmp;
  }

  push(value: T) {
    let count = 1;
    while (!this.deque.empty() && this.cmp(this.deque.getBack().value, value)) {
      count += this.deque.popBack().count;
    }
    this.deque.pushBack({ value, count });
  }

  pop(): T {
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

  top(): T {
    if (this.empty()) {
      throw Error("Cannot get top value from an empty queue");
    }
    return this.deque.getFront().value;
  }

  empty(): boolean {
    return this.deque.empty();
  }

  size(): number {
    return this.deque.size;
  }
}
