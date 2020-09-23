import { Stack } from "./stack";

export class ArrayStack<T> implements Stack<T> {
  private arr: T[] = [];

  /**
   * Inserts the given element to the top of the stack.
   *
   * @param item {T} the element to be inserted.
   *
   * @returns {void}
   */
  push(item: T) {
    this.arr.push(item);
  }

  /**
   * Removes and returns the top-most element in the stack.
   *
   * @returns {T} the top-most element in the stack.
   */
  pop(): T {
    if (this.empty()) {
      throw Error("Cannot pop from an empty stack");
    }
    return this.arr.pop()!;
  }

  /**
   * Returns the top-most element in the stack.
   *
   * @returns {T} the top-most element in the stack.
   */
  top(): T {
    if (this.empty()) {
      throw Error("The stack is empty.");
    }
    return this.arr[this.arr.length - 1];
  }

  /**
   * Returns the number of elements in the stack.
   *
   * @returns {number} the number of elmenets in the stack.
   */
  size(): number {
    return this.arr.length;
  }

  /**
   * Returns true if the stack is empty.
   *
   * @returns {boolean} true if the stack is empty; false otherwise.
   */
  empty(): boolean {
    return this.size() === 0;
  }

  /**
   * Removes all elements from the stack.
   *
   * @returns {void}
   */
  clear(): void {
    this.arr = [];
  }
}
