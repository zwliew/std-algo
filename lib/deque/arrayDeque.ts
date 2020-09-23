import { Deque } from "./deque";

export class ArrayDeque<T> implements Deque<T> {
  private arr: T[] = new Array(16);
  private front = -1;
  private back = -1;

  /**
   * The number of elements in the deque.
   */
  size = 0;

  /**
   * Returns true if the deque is empty.
   *
   * @returns {boolean} true if the deque is empty; false otherwise.
   */
  empty(): boolean {
    return this.size === 0;
  }

  /**
   * Returns the first element in the deque.
   * Throws an error if the queue is empty.
   *
   * @returns {T} the first element in the deque.
   */
  getFront(): T {
    if (this.empty()) {
      throw Error("Cannot get front of empty deque");
    }
    return this.arr[this.front];
  }

  /**
   * Returns the lat element in the deque.
   * Throws an error if the queue is empty.
   *
   * @returns {T} the last element in the deque.
   */
  getBack(): T {
    if (this.empty()) {
      throw Error("Cannot get back of empty deque");
    }
    return this.arr[this.back];
  }

  /**
   * Inserts the given element to the front of the deque.
   *
   * @param item {T} the element to be inserted.
   *
   * @returns {void}
   */
  pushFront(item: T): void {
    if (this.empty()) {
      this.front = this.back = 0;
    } else {
      this.front = this.dec(this.front);
    }
    this.arr[this.front] = item;
    ++this.size;
    this.resizeIfNeeded();
  }

  /**
   * Inserts the given element to the back of the deque.
   *
   * @param item {T} the element to be inserted.
   *
   * @returns {void}
   */
  pushBack(item: T): void {
    if (this.empty()) {
      this.front = this.back = 0;
    } else {
      this.back = this.inc(this.back);
    }
    this.arr[this.back] = item;
    ++this.size;
    this.resizeIfNeeded();
  }

  /**
   * Removes and returns the first element in the deque.
   *
   * @returns {T} the first element in the deque.
   */
  popFront(): T {
    if (this.empty()) {
      throw Error("Cannot pop from an empty deque");
    }
    const item = this.arr[this.front];
    this.front = this.inc(this.front);
    --this.size;
    return item;
  }

  /**
   * Removes and returns the last element in the deque.
   *
   * @returns {T} the last element in the deque.
   */
  popBack(): T {
    if (this.empty()) {
      throw Error("Cannot pop from an empty deque");
    }
    const item = this.arr[this.back];
    this.back = this.dec(this.back);
    --this.size;
    return item;
  }

  /**
   * Removes all elements in the deque.
   *
   * @returns {void}
   */
  clear(): void {
    this.arr = new Array(16);
    this.front = -1;
    this.back = -1;
    this.size = 0;
  }

  private resizeIfNeeded() {
    if (this.size === this.arr.length) {
      this.resize(this.arr.length * 2);
    }
  }

  private resize(newSize: number) {
    const newArr = new Array(newSize);
    for (let idx = this.front, i = 0; i < this.size; idx = this.inc(idx), ++i) {
      newArr[i] = this.arr[idx];
    }
    this.arr = newArr;
    this.front = 0;
    this.back = this.size - 1;
  }

  private inc(idx: number) {
    return (idx + 1) % this.arr.length;
  }

  private dec(idx: number) {
    return (idx - 1 + this.arr.length) % this.arr.length;
  }
}
