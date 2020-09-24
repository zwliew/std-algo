import { Heap } from "./heap";

export class BinaryHeap<T> implements Heap<T> {
  private heap: T[] = [];

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
    const item = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    if (!this.empty()) {
      this.siftDown(0);
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
    for (let parent = (i - 1) >> 1; parent >= 0 && item > this.heap[parent]; ) {
      this.heap[i] = this.heap[parent];
      i = parent;
      parent = (i - 1) >> 1;
    }
    this.heap[i] = item;
  }

  private siftDown(i: number): void {
    if (this.size() <= i) {
      throw Error("Heap size too small.");
    }

    const item = this.heap[i];
    for (
      let l = 2 * i + 1, r = 2 * i + 2;
      (l < this.size() && item < this.heap[l]) ||
      (r < this.size() && item < this.heap[r]);
      l = 2 * i + 1, r = 2 * i + 2
    ) {
      let nxtIdx = i;
      let largest = item;
      if (l < this.size() && largest < this.heap[l]) {
        nxtIdx = l;
        largest = this.heap[l];
      }
      if (r < this.size() && largest < this.heap[r]) {
        nxtIdx = r;
        largest = this.heap[r];
      }
      this.heap[i] = largest;
      i = nxtIdx;
    }
    this.heap[i] = item;
  }
}
