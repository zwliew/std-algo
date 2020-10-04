import { Heap } from "./heap";

export class BinaryHeap<T> implements Heap<T> {
  private heap: T[] = [];
  private cmp: (x: T, y: T) => boolean;

  /**
   * Constructs the heap.
   *
   * @param arr {T[]} An array of elements to initialize the heap with.
   * @param cmp {(x: T, y: T) => boolean} returns true if x should go above y in the heap.
   */
  constructor({ arr, cmp }: { arr?: T[]; cmp?: (x: T, y: T) => boolean }) {
    //Default to a max heap.
    if (!(cmp instanceof Function)) {
      cmp = (x, y) => x > y;
    }
    this.cmp = cmp;

    // Initialize the heap with the given array of elements.
    if (arr instanceof Array) {
      this.heap = arr;
      for (let i = (this.size() >> 1) - 1; i >= 0; --i) {
        this.siftDown(i, this.size());
      }
    }
  }

  /**
   * Returns true if the heap is empty.
   *
   * @returns {boolean} true if the heap is empty; false otherwise.
   */
  empty(): boolean {
    return this.size() === 0;
  }

  /**
   * Returns the number of elements in the heap.
   *
   * @returns {number} the number of elements in the heap.
   */
  size(): number {
    return this.heap.length;
  }

  /**
   * Inserts the given element into the heap.
   *
   * @param item {T} the element to be inserted.
   */
  push(item: T): void {
    this.heap.push(item);
    this.siftUp(this.size() - 1);
  }

  /**
   * Removes and returns the top element from the heap.
   *
   * @returns {T} the top element in the heap.
   */
  pop(): T {
    if (this.empty()) {
      throw Error("Cannot pop from an empty heap.");
    }
    const item = this.top();
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    if (!this.empty()) {
      this.siftDown(0, this.size());
    }
    return item;
  }

  /**
   * Returns the top element in the heap.
   *
   * @returns {T} the top element in the heap.
   */
  top(): T {
    if (this.empty()) {
      throw Error("Cannot access the top element in an empty heap.");
    }
    return this.heap[0];
  }

  private siftUp(i: number): void {
    if (this.size() <= i) {
      throw Error("Heap size too small.");
    }

    const item = this.heap[i];
    for (
      let parent = (i - 1) >> 1;
      parent >= 0 && this.cmp(item, this.heap[parent]);
      i = parent, parent = (i - 1) >> 1
    ) {
      this.heap[i] = this.heap[parent];
    }
    this.heap[i] = item;
  }

  private siftDown(i: number, end: number): void {
    if (this.size() <= i) {
      throw Error("Heap size too small.");
    }

    const item = this.heap[i];
    for (
      let l = 2 * i + 1, r = 2 * i + 2;
      (l < end && this.cmp(this.heap[l], item)) ||
      (r < end && this.cmp(this.heap[r], item));
      l = 2 * i + 1, r = 2 * i + 2
    ) {
      let nxtIdx = i;
      let largest = item;
      if (l < end && this.cmp(this.heap[l], largest)) {
        nxtIdx = l;
        largest = this.heap[l];
      }
      if (r < end && this.cmp(this.heap[r], largest)) {
        nxtIdx = r;
        largest = this.heap[r];
      }
      this.heap[i] = largest;
      i = nxtIdx;
    }
    this.heap[i] = item;
  }
}
