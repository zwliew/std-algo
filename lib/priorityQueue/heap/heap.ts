export interface Heap<T> {
  /**
   * Returns the number of elements in the heap.
   *
   * @returns {number} the number of elements in the heap.
   */
  size(): number;

  /**
   * Inserts the given element into the heap.
   *
   * @param item {T} the element to be inserted.
   */
  push(item: T): void;

  /**
   * Removes and returns the top element from the heap.
   *
   * @returns {T} the top element in the heap.
   */
  pop(): T;

  /**
   * Returns the top element in the heap.
   *
   * @returns {T} the top element in the heap.
   */
  top(): T;

  /**
   * Returns true if the heap is empty.
   *
   * @returns {boolean} true if the heap is empty; false otherwise.
   */
  empty(): boolean;
}
