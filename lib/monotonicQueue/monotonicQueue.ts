import { Deque } from "../deque";

export class MonotonicQueue<T> {
  private deque = new Deque<{ value: T; count: number }>();
  private cmp: (x: T, y: T) => boolean;

  /**
   * Constructs the monotonic queue.
   *
   * @param cmp {(x: T, y: T) => boolean} The comparator function to be used to order the elements in the queue.
   */
  constructor(cmp: (x: T, y: T) => boolean) {
    this.cmp = cmp;
  }

  /**
   * Inserts a new element into the queue.
   *
   * @param value {T} the element to be inserted.
   */
  push(value: T) {
    let count = 1;
    while (!this.deque.empty() && this.cmp(this.deque.getBack().value, value)) {
      count += this.deque.popBack().count;
    }
    this.deque.pushBack({ value, count });
  }

  /**
   * Removes and returns the top element in the queue.
   *
   * @returns {T} the top element.
   */
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

  /**
   * Returns the top element in the queue.
   *
   * @returns {T} the top element.
   */
  top(): T {
    if (this.empty()) {
      throw Error("Cannot get top value from an empty queue");
    }
    return this.deque.getFront().value;
  }

  /**
   * Returns true if the queue is empty.
   *
   * @returns {boolean} true if the queue is empty; false otherwise.
   */
  empty(): boolean {
    return this.deque.empty();
  }

  /**
   * Returns the number of elements in the queue.
   *
   * @returns {number} the number of elements in the queue.
   */
  size(): number {
    return this.deque.size;
  }
}
