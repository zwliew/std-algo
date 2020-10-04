import { Heap } from "./heap";

class Node<T> {
  left: Node<T> | undefined;
  right: Node<T> | undefined;
  val: T;

  constructor(val: T) {
    this.val = val;
  }
}

export class RandomizedHeap<T> implements Heap<T> {
  private sz = 0;
  private root: Node<T> | undefined;
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
      for (const x of arr) {
        this.push(x);
      }
    }
  }

  empty(): boolean {
    return this.size() === 0;
  }

  size(): number {
    return this.sz;
  }

  push(item: T): void {
    ++this.sz;
    const node = new Node(item);
    this.root = this.meld(this.root, node);
  }

  pop(): T {
    if (this.empty()) {
      throw Error("Cannot pop from an empty heap.");
    }
    const item = this.top();
    this.root = this.meld(this.root!.left, this.root!.right);
    --this.sz;
    return item;
  }

  top(): T {
    if (this.empty()) {
      throw Error("Cannot access top element in an empty heap.");
    }
    return this.root!.val;
  }

  private meld(x: Node<T> | undefined, y: Node<T> | undefined) {
    if (!x) {
      return y;
    }
    if (!y) {
      return x;
    }

    if (this.cmp(y.val, x.val)) {
      [x, y] = [y, x];
    }
    if (Math.random() >= 0.5) {
      [x.left, x.right] = [x.right, x.left];
    }
    x.left = this.meld(x.left, y);
    return x;
  }
}
