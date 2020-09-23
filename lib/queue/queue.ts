import { Deque } from "./deque";

class Queue {
  private deque = new Deque();

  /**
   * Returns the first element in the queue.
   * Throws an error if the queue is empty.
   *
   * @returns {any} the first element in the queue.
   */
  front(): any {
    return this.deque.getFront();
  }

  /**
   * Returns the last element in the queue.
   * Throws an error if the queue is empty.
   *
   * @returns {any} the last element in the queue.
   */
  back(): any {
    return this.deque.getBack();
  }

  /**
   * Inserts the given element to the end of the queue.
   *
   * @param item {any} the element to be inserted.
   *
   * @returns {void}
   */
  push(item: any): void {
    this.deque.pushBack(item);
  }

  /**
   * Removes and returns the first element in the queue.
   *
   * @returns {any} the first element in the queue.
   */
  pop(): any {
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
   * Returns the number of elements in the queue.
   *
   * @returns {number} the number of elements in the queue.
   */
  size(): number {
    return this.deque.size;
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

export default Queue;
