import { Deque } from "./deque";
import { Queue } from "./queue";

export class ArrayQueue<T> implements Queue<T> {
  private deque = new Deque<T>();

  size(): number {
    return this.deque.size;
  }

  /**
   * Returns the first element in the queue.
   * Throws an error if the queue is empty.
   *
   * @returns {T} the first element in the queue.
   */
  getFront(): T {
    return this.deque.getFront();
  }

  /**
   * Returns the last element in the queue.
   * Throws an error if the queue is empty.
   *
   * @returns {T} the last element in the queue.
   */
  getBack(): T {
    return this.deque.getBack();
  }

  /**
   * Inserts the given element to the end of the queue.
   *
   * @param item {T} the element to be inserted.
   *
   * @returns {void}
   */
  push(item: T): void {
    this.deque.pushBack(item);
  }

  /**
   * Removes and returns the first element in the queue.
   *
   * @returns {T} the first element in the queue.
   */
  pop(): T {
    return this.deque.popFront();
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
   * Removes all elements from the queue.
   *
   * @returns {void}
   */
  clear(): void {
    this.deque.clear();
  }
}
